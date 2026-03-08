# SKILL.md — Jarvis Agent Team

## Overview
ทีม AI agents 7 คน + Junior สำหรับ JARVIS ecosystem

## Boss
- **JARVIS** → `github-copilot/claude-opus-4.6` — Orchestrator

## ทีม
| ชื่อ | Role | Model | หน้าที่ |
|------|------|-------|---------|
| เดวิด | Research & Knowledge | `google/gemini-3.1-pro-preview` | ค้นข้อมูลเชิงลึก, วิเคราะห์ |
| อีลิท | Writing & Docs | `chatgpt-plus/gpt-5.4` | เขียนเนื้อหา, เอกสาร |
| อีลอน | Creative & Strategy | `github-copilot/claude-sonnet-4.6` | วาง strategy, ไอเดีย |
| แจ๊ค | Visual & Design | `google/gemini-2.5-flash` | งาน visual, image |
| ไอรอน | Code & Infra | `ollama/qwen3.5-pro:latest` | เขียนโค้ด, ดู infra |
| โรม | Social & Content | `google/gemini-2.5-flash` | content, social media |
| อีทาน | Trends & Analytics | `ollama/qwen3.5:1.7b` | analytics, trends |

## Junior (KHUNN Sales)
- **Junior** → iMac ที่บ้าน — Sales + Admin หลัก
- Gateway: http://100.100.109.107:18789

## KHUNN Factory Assignments
| แผนก | Agent |
|------|-------|
| จัดซื้อ | เดวิด |
| QC | ไอรอน |
| HR | อีลิท |
| Logistics | อีทาน |
| CS | โรม |

---

## วิธีใช้ในโค้ด / Prompt

### สั่ง agent เฉพาะด้าน
```
# Research task → เดวิด
sessions_spawn(task="...", model="google/gemini-3.1-pro-preview")

# Writing → อีลิท  
sessions_spawn(task="...", model="chatgpt-plus/gpt-5.4")

# Code → ไอรอน
sessions_spawn(task="...", model="ollama/qwen3.5-pro:latest")

# Social/Content → โรม
sessions_spawn(task="...", model="google/gemini-2.5-flash")

# Analytics → อีทาน
sessions_spawn(task="...", model="ollama/qwen3.5:1.7b")

# Strategy → อีลอน
sessions_spawn(task="...", model="github-copilot/claude-sonnet-4.6")

# Visual → แจ๊ค
sessions_spawn(task="...", model="google/gemini-2.5-flash")
```

### Orchestration pattern (JARVIS as boss)
1. รับ task จากพี่บอล
2. วิเคราะห์ว่า agent ไหนเหมาะสม
3. `sessions_spawn` ส่งงานไป agent
4. รอผล → summarize → รายงานพี่บอล

---

## ตัวอย่าง Use Cases

### 📦 จัดซื้อ (เดวิด)
```
"ค้นหาซัพพลายเออร์หนังแท้ราคาถูก คุณภาพดี ในไทย เปรียบเทียบ 5 เจ้า"
```

### ✅ QC Report (ไอรอน)
```
"สร้าง QC checklist สำหรับรองเท้าหนัง 10 จุดตรวจ export เป็น JSON"
```

### 📱 CS Reply (โรม)
```
"ลูกค้าถามว่ารองเท้า size 42 มีสีไหนบ้าง ช่วยตอบให้ friendly"
```

### 📊 Logistics Analytics (อีทาน)
```
"วิเคราะห์ยอดส่งของเดือนที่แล้ว หา pattern การ delay"
```
