import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { twinKnowledgeBase } from "../../data/aiData";
import { FiX, FiRefreshCw } from "react-icons/fi";
import "./DigitalTwinWidget.css";

const DigitalTwinWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState("root");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Reset dialogue tree on open
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: "twin",
          text: twinKnowledgeBase.dialogueTree.root.text,
          timestamp: new Date()
        }
      ]);
    }
  }, [messages.length]);

  // Listen for global open event
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-digital-twin", handleOpen);
    return () => window.removeEventListener("open-digital-twin", handleOpen);
  }, []);

  // Scroll to bottom
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Auto-close on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleOptionClick = (option) => {
    // 1. Add User Choice Message
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: option.label,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const nextKey = option.next;

    // 2. Simulate delay
    setTimeout(() => {
      setIsTyping(false);

      if (nextKey === "route_contact") {
        const twinMsg = {
          id: Date.now() + 1,
          sender: "twin",
          text: "Routing you to my Contact page now. Let's build something great!",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, twinMsg]);
        setTimeout(() => {
          setIsOpen(false);
          navigate("/contact");
        }, 800);
        return;
      }

      const nextNode = twinKnowledgeBase.dialogueTree[nextKey] || twinKnowledgeBase.dialogueTree.root;
      
      const twinMsg = {
        id: Date.now() + 1,
        sender: "twin",
        text: nextNode.text,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, twinMsg]);
      setCurrentNode(nextKey);
    }, 700);
  };

  const handleReset = () => {
    setCurrentNode("root");
    setMessages([
      {
        id: Date.now(),
        sender: "twin",
        text: twinKnowledgeBase.dialogueTree.root.text,
        timestamp: new Date()
      }
    ]);
  };

  const currentOptions = twinKnowledgeBase.dialogueTree[currentNode]?.options || [];

  return (
    <div className="digital-twin-widget">
      {/* Tooltip prompt bubble */}
      {!isOpen && (
        <div className="dt-tooltip-bubble" onClick={() => setIsOpen(true)}>
          <span>Talk to me! 💬</span>
          <div className="dt-tooltip-arrow"></div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        className={`dt-toggle-btn ${isOpen ? "dt-toggle-btn--active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Digital Twin Chat"
      >
        {isOpen ? (
          <FiX className="dt-toggle-icon" />
        ) : (
          <div className="dt-toggle-avatar-wrapper">
            <img src="/images/mr_heritage.png" alt="Digital Twin Avatar" className="dt-toggle-avatar" />
            <span className="dt-pulse-ring"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="dt-chat-window card-glass animate-scale-in">
          {/* Header */}
          <div className="dt-chat-header">
            <div className="dt-chat-profile">
              <div className="dt-avatar-wrapper">
                <img src="/images/mr_heritage.png" alt="Inioluwa Clone" className="dt-avatar" />
                <span className="dt-status-dot"></span>
              </div>
              <div className="dt-profile-text">
                <h3>Digital Twin</h3>
                <span>Inioluwa's Clone (Active)</span>
              </div>
            </div>
            <div className="dt-header-actions">
              <button className="dt-reset-btn" onClick={handleReset} title="Reset Conversation">
                <FiRefreshCw />
              </button>
              <button className="dt-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Chat">
                <FiX />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="dt-chat-body">
            <div className="dt-messages-container">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`dt-msg-bubble-wrapper ${msg.sender === "user" ? "dt-user-wrapper" : "dt-twin-wrapper"}`}
                >
                  {msg.sender === "twin" && (
                    <img src="/images/mr_heritage.png" alt="Avatar" className="dt-msg-avatar" />
                  )}
                  <div className={`dt-msg-bubble ${msg.sender === "user" ? "dt-user-bubble" : "dt-twin-bubble"}`}>
                    <p style={{ whiteSpace: "pre-line" }}>{msg.text}</p>
                    <span className="dt-msg-time">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="dt-msg-bubble-wrapper dt-twin-wrapper">
                  <img src="/images/mr_heritage.png" alt="Avatar" className="dt-msg-avatar" />
                  <div className="dt-msg-bubble dt-twin-bubble dt-typing-bubble">
                    <div className="dt-typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Option Selection Panel (Dialogue Tree Options) */}
          <div className="dt-chat-footer">
            <div className="dt-options-container">
              {!isTyping && currentOptions.map((option, idx) => (
                <button
                  key={idx}
                  className="dt-option-chip"
                  onClick={() => handleOptionClick(option)}
                >
                  <span>{option.label}</span>
                </button>
              ))}
              {isTyping && (
                <span className="dt-waiting-text">Cloning thoughts...</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalTwinWidget;
