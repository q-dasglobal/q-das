import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  description: string;
}

export function ContactEmail({ name, email, description }: ContactEmailProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          backgroundColor: "#f9fafb",
          margin: 0,
          padding: 0,
        }}
      >
        <table
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          style={{
            backgroundColor: "#f9fafb",
            padding: "40px 20px",
          }}
        >
          <tr>
            <td align="center">
              <table
                width="600"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                }}
              >
                {/* Header */}
                <tr>
                  <td
                    style={{
                      background:
                        "linear-gradient(135deg, #0066CC 0%, #0052A3 100%)",
                      padding: "40px 40px 30px",
                      textAlign: "center",
                    }}
                  >
                    <h1
                      style={{
                        color: "#ffffff",
                        fontSize: "28px",
                        fontWeight: "bold",
                        margin: "0 0 10px",
                      }}
                    >
                      New Contact Form Submission
                    </h1>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "16px",
                        margin: 0,
                      }}
                    >
                      Q-DAS Global Website
                    </p>
                  </td>
                </tr>

                {/* Content */}
                <tr>
                  <td style={{ padding: "40px" }}>
                    {/* From Section */}
                    <div style={{ marginBottom: "30px" }}>
                      <h2
                        style={{
                          color: "#111827",
                          fontSize: "18px",
                          fontWeight: "600",
                          margin: "0 0 16px",
                          borderBottom: "2px solid #e5e7eb",
                          paddingBottom: "8px",
                        }}
                      >
                        Contact Information
                      </h2>
                      <table width="100%" cellPadding="0" cellSpacing="0">
                        <tr>
                          <td
                            style={{
                              padding: "12px 0",
                              borderBottom: "1px solid #f3f4f6",
                            }}
                          >
                            <strong
                              style={{
                                color: "#6b7280",
                                fontSize: "14px",
                                fontWeight: "500",
                                display: "inline-block",
                                width: "80px",
                              }}
                            >
                              Name:
                            </strong>
                            <span
                              style={{
                                color: "#111827",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              {name}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: "12px 0" }}>
                            <strong
                              style={{
                                color: "#6b7280",
                                fontSize: "14px",
                                fontWeight: "500",
                                display: "inline-block",
                                width: "80px",
                              }}
                            >
                              Email:
                            </strong>
                            <a
                              href={`mailto:${email}`}
                              style={{
                                color: "#0066CC",
                                fontSize: "16px",
                                textDecoration: "none",
                                fontWeight: "500",
                              }}
                            >
                              {email}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* Message Section */}
                    <div>
                      <h2
                        style={{
                          color: "#111827",
                          fontSize: "18px",
                          fontWeight: "600",
                          margin: "0 0 16px",
                          borderBottom: "2px solid #e5e7eb",
                          paddingBottom: "8px",
                        }}
                      >
                        Message
                      </h2>
                      <div
                        style={{
                          backgroundColor: "#f9fafb",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          padding: "20px",
                          color: "#374151",
                          fontSize: "15px",
                          lineHeight: "1.7",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                        }}
                      >
                        {description}
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#f9fafb",
                      padding: "30px 40px",
                      borderTop: "1px solid #e5e7eb",
                    }}
                  >
                    <p
                      style={{
                        color: "#6b7280",
                        fontSize: "14px",
                        margin: "0 0 8px",
                        textAlign: "center",
                      }}
                    >
                      This email was sent from the contact form on{" "}
                      <strong>Q-DAS Global</strong> website
                    </p>
                    <p
                      style={{
                        color: "#9ca3af",
                        fontSize: "12px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      Reply directly to this email to respond to {name}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}

export default ContactEmail;
