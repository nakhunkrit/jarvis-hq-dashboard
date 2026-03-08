/**
 * Jarvis Agent Team — Orchestration Helper
 * ใช้ไฟล์นี้เป็น reference สำหรับ dispatch งานไปยัง agent ที่ถูกต้อง
 */

const AGENTS = {
  david: {
    name: "เดวิด",
    role: "Research & Knowledge",
    model: "google/gemini-3.1-pro-preview",
    tags: ["research", "analysis", "procurement", "จัดซื้อ"],
  },
  elit: {
    name: "อีลิท",
    role: "Writing & Docs",
    model: "chatgpt-plus/gpt-5.4",
    tags: ["writing", "docs", "hr", "เอกสาร"],
  },
  elon: {
    name: "อีลอน",
    role: "Creative & Strategy",
    model: "github-copilot/claude-sonnet-4.6",
    tags: ["strategy", "creative", "planning"],
  },
  jack: {
    name: "แจ๊ค",
    role: "Visual & Design",
    model: "google/gemini-2.5-flash",
    tags: ["visual", "design", "image"],
  },
  iron: {
    name: "ไอรอน",
    role: "Code & Infra",
    model: "ollama/qwen3.5-pro:latest",
    tags: ["code", "infra", "qc", "QC"],
  },
  rome: {
    name: "โรม",
    role: "Social & Content",
    model: "google/gemini-2.5-flash",
    tags: ["social", "content", "cs", "customer service"],
  },
  ethan: {
    name: "อีทาน",
    role: "Trends & Analytics",
    model: "ollama/qwen3.5:1.7b",
    tags: ["analytics", "trends", "logistics"],
  },
};

const JUNIOR = {
  name: "Junior",
  role: "Sales + Admin (KHUNN)",
  gateway: "http://100.106.239.32:18789",
  tags: ["sales", "admin", "khunn"],
};

const KHUNN_FACTORY = {
  จัดซื้อ: AGENTS.david,
  QC: AGENTS.iron,
  HR: AGENTS.elit,
  Logistics: AGENTS.ethan,
  CS: AGENTS.rome,
};

module.exports = { AGENTS, JUNIOR, KHUNN_FACTORY };
