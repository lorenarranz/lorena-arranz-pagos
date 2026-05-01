// ============================================================
//   PLANTILLAS DE EMAIL - LORENA ARRANZ
// ============================================================
//
//   👉 Para personalizar textos: edita las funciones de abajo
//      y haz commit en GitHub. Vercel desplegará automáticamente.
//
//   ✏️ Lo que puedes editar fácilmente:
//      - Saludos, despedidas, copys
//      - Asunto del email (en webhook-stripe.js)
//      - Logo, colores, fuentes
//
// ============================================================

// === EMAIL QUE RECIBE LA CLIENTE ===
export function emailCliente(d) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Tu plaza está reservada</title>
</head>
<body style="margin:0;padding:0;background:#faf6ef;font-family:Georgia,'Cormorant Garamond',serif;color:#2a2440;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#faf6ef;padding:40px 20px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(74,50,112,0.1);">

        <!-- HEADER -->
        <tr>
          <td style="background:#2f1f4a;padding:40px 30px;text-align:center;">
            <div style="font-family:Georgia,serif;color:#faf6ef;font-size:14px;letter-spacing:6px;font-weight:600;">LORENA ARRANZ</div>
            <div style="color:#c9a961;font-size:11px;letter-spacing:3px;margin-top:8px;text-transform:uppercase;">Maquillaje y reconexión personal</div>
          </td>
        </tr>

        <!-- BIENVENIDA -->
        <tr>
          <td style="padding:50px 40px 20px;text-align:center;">
            <div style="color:#c9a961;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-family:Arial,sans-serif;">Tu plaza está confirmada</div>
            <h1 style="font-family:Georgia,'Cormorant Garamond',serif;color:#2f1f4a;font-size:38px;margin:0 0 16px;font-weight:500;line-height:1.1;">¡Hola ${d.nombre}!</h1>
            <p style="color:#5c5470;font-size:17px;line-height:1.7;margin:0;font-family:Arial,sans-serif;">
              Qué alegría tenerte en el curso. Estoy deseando conocerte y que descubras lo bien que sienta dedicarte un rato a ti misma.
            </p>
          </td>
        </tr>

        <!-- DETALLES DE LA RESERVA -->
        <tr>
          <td style="padding:20px 40px;">
            <div style="background:#faf6ef;border-left:3px solid #c9a961;padding:30px;border-radius:0 8px 8px 0;">
              <div style="color:#c9a961;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-family:Arial,sans-serif;font-weight:600;">Detalles de tu reserva</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,sans-serif;">
                <tr>
                  <td style="padding:8px 0;color:#5c5470;font-size:14px;width:40%;">Ciudad:</td>
                  <td style="padding:8px 0;color:#2f1f4a;font-size:15px;font-weight:600;">${d.ciudad}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c5470;font-size:14px;">Fecha:</td>
                  <td style="padding:8px 0;color:#2f1f4a;font-size:15px;font-weight:600;">${d.fecha}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c5470;font-size:14px;">Turno:</td>
                  <td style="padding:8px 0;color:#2f1f4a;font-size:15px;font-weight:600;">${d.turno}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c5470;font-size:14px;">Plazas:</td>
                  <td style="padding:8px 0;color:#2f1f4a;font-size:15px;font-weight:600;">${d.plazas}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#5c5470;font-size:14px;">Neceser:</td>
                  <td style="padding:8px 0;color:#2f1f4a;font-size:15px;font-weight:600;">${d.neceser}</td>
                </tr>
                <tr>
                  <td style="padding:14px 0 0;border-top:1px solid #e2c889;color:#5c5470;font-size:14px;">Total pagado:</td>
                  <td style="padding:14px 0 0;border-top:1px solid #e2c889;color:#c9a961;font-size:22px;font-weight:600;font-family:Georgia,serif;">${d.total} €</td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- QUÉ PASA AHORA -->
        <tr>
          <td style="padding:30px 40px;">
            <h2 style="font-family:Georgia,'Cormorant Garamond',serif;color:#2f1f4a;font-size:24px;margin:0 0 16px;font-weight:500;">¿Qué pasa ahora?</h2>
            <p style="color:#5c5470;font-size:15px;line-height:1.75;margin:0 0 14px;font-family:Arial,sans-serif;">
              Unos días antes del curso te enviaré un email con la <strong style="color:#2f1f4a;">dirección exacta del local</strong> y todos los detalles prácticos: cómo llegar, qué llevar y a qué hora estar allí.
            </p>
            <p style="color:#5c5470;font-size:15px;line-height:1.75;margin:0;font-family:Arial,sans-serif;">
              Mientras tanto, si tienes cualquier duda escríbeme directamente a <a href="mailto:info@lorenarranz.com" style="color:#c9a961;text-decoration:none;font-weight:600;">info@lorenarranz.com</a>.
            </p>
          </td>
        </tr>

        <!-- CITA PERSONAL -->
        <tr>
          <td style="padding:20px 40px 40px;">
            <div style="border-left:3px solid #c9a961;padding:8px 0 8px 24px;">
              <p style="font-family:Georgia,'Cormorant Garamond',serif;color:#4a3270;font-size:20px;font-style:italic;margin:0;line-height:1.4;">
                "Maquillarse no va de taparse. Va de volver a verte."
              </p>
              <p style="font-family:'Brush Script MT',cursive;color:#c9a961;font-size:22px;margin:10px 0 0;">— Lorena</p>
            </div>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#1a1230;padding:30px;text-align:center;">
            <div style="font-family:Georgia,serif;color:#faf6ef;font-size:14px;letter-spacing:4px;font-weight:600;margin-bottom:14px;">LORENA ARRANZ</div>
            <div style="font-family:Arial,sans-serif;color:rgba(250,246,239,0.7);font-size:12px;line-height:1.7;">
              <a href="https://lorenarranz.com" style="color:#e2c889;text-decoration:none;">lorenarranz.com</a> ·
              <a href="https://instagram.com/lorenarranz.mentoria" style="color:#e2c889;text-decoration:none;">@lorenarranz.mentoria</a>
            </div>
            <div style="font-family:Arial,sans-serif;color:rgba(250,246,239,0.4);font-size:11px;margin-top:16px;">
              © Lorena Arranz · Has recibido este email porque has reservado plaza en uno de mis cursos.
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

</body>
</html>
  `;
}


// === EMAIL QUE RECIBE LORENA ===
export function emailLorena(d) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Nueva reserva</title>
</head>
<body style="margin:0;padding:0;background:#faf6ef;font-family:Arial,sans-serif;color:#2a2440;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#faf6ef;padding:40px 20px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(74,50,112,0.1);">

        <!-- HEADER -->
        <tr>
          <td style="background:linear-gradient(135deg,#c9a961,#e2c889);padding:36px 30px;text-align:center;">
            <div style="font-size:42px;margin-bottom:8px;">🎉</div>
            <h1 style="font-family:Georgia,serif;color:#2f1f4a;font-size:28px;margin:0;font-weight:600;">Nueva reserva</h1>
          </td>
        </tr>

        <!-- DATOS DEL CURSO -->
        <tr>
          <td style="padding:36px 36px 20px;">
            <div style="color:#c9a961;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin-bottom:16px;font-weight:700;">Detalles del curso</div>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#5c5470;font-size:13px;width:35%;">📍 Ciudad</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#2f1f4a;font-size:15px;font-weight:600;">${d.ciudad}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#5c5470;font-size:13px;">📅 Fecha</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#2f1f4a;font-size:15px;font-weight:600;">${d.fecha}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#5c5470;font-size:13px;">🕐 Turno</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#2f1f4a;font-size:15px;font-weight:600;">${d.turno}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#5c5470;font-size:13px;">👥 Plazas</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#2f1f4a;font-size:15px;font-weight:600;">${d.plazas}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#5c5470;font-size:13px;">💼 Neceser</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0e9da;color:#2f1f4a;font-size:15px;font-weight:600;">${d.neceser}</td>
              </tr>
              <tr>
                <td style="padding:14px 0;color:#5c5470;font-size:13px;">💰 Total cobrado</td>
                <td style="padding:14px 0;color:#c9a961;font-size:22px;font-weight:700;font-family:Georgia,serif;">${d.total} €</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- DATOS CLIENTA -->
        <tr>
          <td style="padding:0 36px 30px;">
            <div style="background:#faf6ef;border-radius:8px;padding:24px;">
              <div style="color:#c9a961;font-size:10px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;">Datos de la clienta</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:6px 0;color:#5c5470;font-size:13px;width:30%;">Nombre:</td>
                  <td style="padding:6px 0;color:#2f1f4a;font-size:14px;font-weight:600;">${d.nombre}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#5c5470;font-size:13px;">Email:</td>
                  <td style="padding:6px 0;font-size:14px;"><a href="mailto:${d.email}" style="color:#4a3270;text-decoration:none;font-weight:600;">${d.email}</a></td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#5c5470;font-size:13px;">Teléfono:</td>
                  <td style="padding:6px 0;color:#2f1f4a;font-size:14px;font-weight:600;">${d.telefono}</td>
                </tr>
              </table>

              ${d.telefono !== 'No facilitado' ? `
              <a href="https://wa.me/${d.telefono.replace(/\\D/g,'')}" style="display:inline-block;margin-top:16px;background:#25D366;color:#ffffff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">
                💬 Escribir por WhatsApp
              </a>
              ` : ''}
            </div>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f0e9da;padding:20px;text-align:center;font-size:12px;color:#5c5470;">
            Esta venta también está registrada en tu panel de Stripe
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

</body>
</html>
  `;
}

