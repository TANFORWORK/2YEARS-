import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Memory {
  id: number;
  url: string;
  caption: string;
}

type ColorType = "dark" | "gray" | "orange";

interface CalcButtonProps {
  value: string;
  onClick: (value: string) => void;
  color?: ColorType;
  wide?: boolean;
}

export default function AnniversaryApp() {
  const [showCalculator, setShowCalculator] = useState(true);
  const [display, setDisplay] = useState("0");

  // ใหŒ dev ใส่ URL รูปภาพหรือวิดีโอตรงนี้
  const memories: Memory[] = [
    {
      id: 1,
      url: "/public/img&clip/TEST.jpg",
      caption: "",
    },
    {
      id: 2,
      url: "",
      caption: "",
    },
    {
      id: 3,
      url: "",
      caption: "",
    },
    {
      id: 4,
      url: "",
      caption: "",
    },
  ];

  // Apply black background to body when calculator is shown
  useEffect(() => {
    if (showCalculator) {
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.style.backgroundColor = "#000";
      document.body.style.overflow = "hidden";
      document.documentElement.style.backgroundColor = "#000";
      document.documentElement.style.margin = "0";
      document.documentElement.style.padding = "0";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.overflow = "auto";
      document.documentElement.style.backgroundColor = "#fff";
    }
  }, [showCalculator]);

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      setShowCalculator(false);
      return;
    }

    if (value === "AC") {
      setDisplay("0");
      return;
    }

    if (display === "0" && value !== ".") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  if (showCalculator) {
    const isMobile = window.innerWidth <= 414;

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          minHeight: "100vh",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
          overflow: "hidden",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            padding: isMobile ? "0 12px" : "20px",
            marginTop: isMobile ? "60px" : "0",
          }}
        >
          {/* Display */}
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              textAlign: "right",
              fontSize: isMobile ? "70px" : "72px",
              fontWeight: "200",
              marginBottom: isMobile ? "12px" : "16px",
              padding: isMobile ? "0 12px" : "0 32px",
              overflow: "hidden",
              minHeight: isMobile ? "100px" : "120px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              letterSpacing: "-0.5px",
            }}
          >
            {display}
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: isMobile ? "10px" : "14px",
              maxWidth: "100%",
              margin: "0 auto",
              padding: isMobile ? "0" : "0 16px",
            }}
          >
            {/* Row 1 */}
            <CalcButton onClick={handleButtonClick} value="AC" color="gray" />
            <CalcButton onClick={handleButtonClick} value="+/-" color="gray" />
            <CalcButton onClick={handleButtonClick} value="%" color="gray" />
            <CalcButton onClick={handleButtonClick} value="÷" color="orange" />

            {/* Row 2 */}
            <CalcButton onClick={handleButtonClick} value="7" />
            <CalcButton onClick={handleButtonClick} value="8" />
            <CalcButton onClick={handleButtonClick} value="9" />
            <CalcButton onClick={handleButtonClick} value="×" color="orange" />

            {/* Row 3 */}
            <CalcButton onClick={handleButtonClick} value="4" />
            <CalcButton onClick={handleButtonClick} value="5" />
            <CalcButton onClick={handleButtonClick} value="6" />
            <CalcButton onClick={handleButtonClick} value="-" color="orange" />

            {/* Row 4 */}
            <CalcButton onClick={handleButtonClick} value="1" />
            <CalcButton onClick={handleButtonClick} value="2" />
            <CalcButton onClick={handleButtonClick} value="3" />
            <CalcButton onClick={handleButtonClick} value="+" color="orange" />

            {/* Row 5 */}
            <CalcButton onClick={handleButtonClick} value="0" wide />
            <CalcButton onClick={handleButtonClick} value="." />
            <CalcButton onClick={handleButtonClick} value="=" color="orange" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", color: "#111" }}>
      {/* Hero Section */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: window.innerWidth <= 414 ? "24px 20px" : "24px",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: window.innerWidth <= 414 ? "80px" : "96px",
              fontWeight: "300",
              letterSpacing: "-2px",
              marginBottom: "24px",
            }}
          >
            2
          </h1>
          <p
            style={{
              fontSize: window.innerWidth <= 414 ? "22px" : "28px",
              fontWeight: "300",
              color: "#666",
              marginBottom: "24px",
            }}
          >
            years together
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#999",
              maxWidth: "320px",
              margin: "0 auto",
              lineHeight: "1.6",
              padding: "0 16px",
            }}
          >
            เขียนข้อความตรงนี้ได้เลย
            <br />
            สิ่งที่อยากบอกแฟน
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "48px",
            animation: "bounce 2s infinite",
          }}
        >
          <ChevronDown
            style={{ width: "24px", height: "24px", color: "#999" }}
          />
        </div>
      </div>

      {/* Moments Section */}
      <div
        style={{
          maxWidth: "896px",
          margin: "0 auto",
          padding: window.innerWidth <= 414 ? "60px 20px" : "80px 24px",
        }}
      >
        <h2
          style={{
            fontSize: window.innerWidth <= 414 ? "32px" : "36px",
            fontWeight: "300",
            marginBottom: window.innerWidth <= 414 ? "48px" : "64px",
            textAlign: "center",
          }}
        >
          moments
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: window.innerWidth <= 414 ? "72px" : "96px",
          }}
        >
          {memories.map((memory) => (
            <div
              key={memory.id}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Image/Video Display */}
              <div
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "2px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {memory.url.includes("video") || memory.url.includes(".mp4") ? (
                  <video
                    src={memory.url}
                    controls
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={memory.url}
                    alt={memory.caption}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>

              {/* Caption */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    flex: 1,
                    color: "#666",
                    fontSize: "14px",
                    margin: 0,
                    lineHeight: "1.6",
                  }}
                >
                  {memory.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "80px 0", textAlign: "center" }}>
        <p style={{ fontSize: "14px", color: "#999", marginBottom: "8px" }}></p>
        <p style={{ color: "#666" }}>ขอบคุณสำหรับทุกวัน</p>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

function CalcButton({
  value,
  onClick,
  color = "dark",
  wide = false,
}: CalcButtonProps) {
  const colors = {
    dark: { bg: "#333333", text: "#fff" },
    gray: { bg: "#a6a6a6", text: "#000" },
    orange: { bg: "#ff9f0a", text: "#fff" },
  };

  const currentColor = colors[color];
  const isMobile = window.innerWidth <= 414;
  const buttonSize = isMobile ? Math.floor((window.innerWidth - 44) / 4) : 84;

  return (
    <div
      onClick={() => onClick(value)}
      style={{
        height: `${buttonSize}px`,
        borderRadius: `${buttonSize / 2}px`,
        fontSize: isMobile ? "32px" : "36px",
        fontWeight: color === "gray" ? "400" : "300",
        display: "flex",
        alignItems: "center",
        justifyContent: wide ? "flex-start" : "center",
        paddingLeft: wide ? (isMobile ? "28px" : "34px") : "0",
        cursor: "pointer",
        userSelect: "none",
        backgroundColor: currentColor.bg,
        color: currentColor.text,
        gridColumn: wide ? "span 2" : "span 1",
        transition: "all 0.15s ease",
        WebkitTapHighlightColor: "transparent",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.95)";
        e.currentTarget.style.filter = "brightness(1.2)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.filter = "brightness(1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.filter = "brightness(1)";
      }}
      onTouchStart={(e) => {
        e.currentTarget.style.transform = "scale(0.95)";
        e.currentTarget.style.filter = "brightness(1.2)";
      }}
      onTouchEnd={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.filter = "brightness(1)";
      }}
    >
      {value}
    </div>
  );
}
