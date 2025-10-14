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
  const [memories, setMemories] = useState<Memory[]>([
    { id: 1, url: "", caption: "" },
    { id: 2, url: "", caption: "" },
    { id: 3, url: "", caption: "" },
    { id: 4, url: "", caption: "" },
  ]);

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

  const handleFileUpload = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setMemories((prev) => prev.map((m) => (m.id === id ? { ...m, url } : m)));
    }
  };

  const handleCaptionChange = (id: number, caption: string) => {
    setMemories((prev) =>
      prev.map((m) => (m.id === id ? { ...m, caption } : m))
    );
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
          padding: isMobile ? "20px 16px" : "12px",
          margin: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: isMobile ? "100%" : "420px",
            padding: 0,
          }}
        >
          {/* Display */}
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              textAlign: "right",
              fontSize: isMobile ? "64px" : "60px",
              fontWeight: "300",
              marginBottom: isMobile ? "16px" : "8px",
              padding: isMobile ? "40px 8px 20px 8px" : "32px 24px",
              overflow: "hidden",
              minHeight: isMobile ? "120px" : "auto",
            }}
          >
            {display}
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: isMobile ? "10px" : "12px",
              maxWidth: "100%",
              margin: "0 auto",
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
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Image/Video Upload Area */}
              <div
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "2px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {memory.url ? (
                  memory.url.includes("video") ||
                  memory.url.includes(".mp4") ? (
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
                  )
                ) : (
                  <label
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <p style={{ color: "#999", fontSize: "14px" }}>
                        + เพิ่มรูปหรือคลิป
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={(e) => handleFileUpload(memory.id, e)}
                      style={{ display: "none" }}
                    />
                  </label>
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
                <span
                  style={{
                    color: "#999",
                    fontSize: "14px",
                    marginTop: "4px",
                    flexShrink: 0,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <input
                  type="text"
                  value={memory.caption}
                  onChange={(e) =>
                    handleCaptionChange(memory.id, e.target.value)
                  }
                  placeholder="เขียนอะไรสักหน่อย..."
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#666",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "80px 0", textAlign: "center" }}>
        <p style={{ fontSize: "14px", color: "#999", marginBottom: "8px" }}>
          {new Date().toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
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
    dark: { bg: "#333", text: "#fff" },
    gray: { bg: "#a5a5a5", text: "#000" },
    orange: { bg: "#ff9500", text: "#fff" },
  };

  const currentColor = colors[color];
  const isMobile = window.innerWidth <= 414;
  const buttonSize = isMobile ? Math.floor((window.innerWidth - 52) / 4) : 80;

  return (
    <div
      onClick={() => onClick(value)}
      style={{
        height: `${buttonSize}px`,
        borderRadius: `${buttonSize / 2}px`,
        fontSize: isMobile ? "30px" : "32px",
        fontWeight: "300",
        display: "flex",
        alignItems: "center",
        justifyContent: wide ? "flex-start" : "center",
        paddingLeft: wide ? (isMobile ? "28px" : "32px") : "0",
        cursor: "pointer",
        userSelect: "none",
        backgroundColor: currentColor.bg,
        color: currentColor.text,
        gridColumn: wide ? "span 2" : "span 1",
        transition: "opacity 0.1s",
        WebkitTapHighlightColor: "transparent",
      }}
      onMouseDown={(e) => (e.currentTarget.style.opacity = "0.5")}
      onMouseUp={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      onTouchStart={(e) => (e.currentTarget.style.opacity = "0.5")}
      onTouchEnd={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {value}
    </div>
  );
}
