import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  empresa: z.string().min(1).max(200),
  sector: z.string().max(120).optional().default(""),
  nombre: z.string().min(1).max(200),
  email: z.string().email().max(200),
  telefono: z.string().max(60).optional().default(""),
  capacidades: z.array(z.string().max(200)).max(30).optional().default([]),
});

const DESTINATARIOS = ["grios@netlife.net.ec", "arquito@netlife.net.ec"];
const SPREADSHEET_ID = "18FHRN2dWCUq7xS9_JDtKPnVTYfLCEkYYD-27z6TK0Dg";
const SHEET_RANGE = "Oportunidades!A:H";

const b64 = (s: string) =>
  btoa(Array.from(new TextEncoder().encode(s), (b) => String.fromCharCode(b)).join(""));
const header = (v: string) => (/^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`);

function buildRawEmail(to: string, subject: string, html: string) {
  const email = [
    `To: ${to}`,
    `Subject: ${header(subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/html; charset="UTF-8"',
    "",
    html,
  ].join("\r\n");
  return b64(email).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export const enviarOportunidad = createServerFn({ method: "POST" })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
    const sheetsKey = process.env["GOOGLE_SHEETS_API_KEY"];

    const fecha = new Date().toLocaleString("es-EC", { timeZone: "America/Guayaquil" });
    const capacidades = data.capacidades.join(", ") || "Sin selección";
    const rows = [
      [
        fecha,
        data.empresa,
        data.sector || "No indicado",
        data.nombre,
        data.email,
        data.telefono || "No indicado",
        capacidades,
        "Portafolio digital Netlife Business",
      ],
    ];

    const errores: string[] = [];

    if (lovableKey && sheetsKey) {
      try {
        const res = await fetch(
          `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": sheetsKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ values: rows }),
          },
        );
        if (!res.ok) {
          const body = await res.text();
          console.error(`Sheets append failed [${res.status}]: ${body}`);
          errores.push("sheets");
        }
      } catch (err) {
        console.error("Sheets append error", err);
        errores.push("sheets");
      }
    } else {
      errores.push("sheets");
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
        <h2 style="margin:0 0 4px">Nueva solicitud de consultoría</h2>
        <p style="margin:0 0 16px;color:#555">Recibida el ${fecha} desde el portafolio digital de Netlife Business.</p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:620px">
          ${[
            ["Empresa", data.empresa],
            ["Sector", data.sector || "No indicado"],
            ["Nombre", data.nombre],
            ["Correo", data.email],
            ["Teléfono", data.telefono || "No indicado"],
            ["Capacidades de interés", capacidades],
          ]
            .map(
              ([k, v]) =>
                `<tr><td style="border-bottom:1px solid #eee;color:#666;width:190px">${k}</td><td style="border-bottom:1px solid #eee;font-weight:600">${v}</td></tr>`,
            )
            .join("")}
        </table>
      </div>`;

    if (lovableKey && gmailKey) {
      try {
        const res = await fetch(
          "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": gmailKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              raw: buildRawEmail(
                DESTINATARIOS.join(", "),
                `Solicitud de consultoría · ${data.empresa}`,
                html,
              ),
            }),
          },
        );
        if (!res.ok) {
          const body = await res.text();
          console.error(`Gmail send failed [${res.status}]: ${body}`);
          errores.push("email");
        }
      } catch (err) {
        console.error("Gmail send error", err);
        errores.push("email");
      }
    } else {
      errores.push("email");
    }

    if (errores.includes("email") && errores.includes("sheets")) {
      throw new Error("No fue posible registrar la solicitud.");
    }

    return { ok: true, registrado: !errores.includes("sheets"), enviado: !errores.includes("email") };
  });
