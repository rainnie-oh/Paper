# Source Content

## 作品集大纲：# Paper – Interactive Analysis Notebook for Engineers

### Hero Section
**Title:** Paper — Interactive Analysis Notebook for Engineers
**Tags:** Product Design | AI SaaS

**Layout Structure:**
*   **Left Column (Top):** Title + Tags
*   **Left Column (Bottom):** One-liner
*   **Right Column:** Key Info Table

**One-liner:** Built 0-1 modular system unifying code, parameters, and visualization into dynamic documents.

**Key Info:**
| Timeline | Role | Status | Tools |
| :--- | :--- | :--- | :--- |
| 2024.05 - 2024.12 | Sole Product Designer (0-1) | Public Beta (Dec 2025) | Figma, Google AI Studio |

---

### Section 1: User Pain Points & Insights

**Phase 1: Authoring** → **Phase 2: Delivery**

| Phase 1: Authoring | Phase 2: Delivery |
| :--- | :--- |
| Engineers constantly jump between tools—MATLAB for analysis, Overleaf for writing, manually copy-pasting results | When engineering papers can't be run, verified, or interacted with, they become black boxes |

**Paper's Solution:**
Unified environment where **writing = analysis = presentation**. What's delivered isn't a static report, but an explorable, reproducible interactive document.

**排版建议：**
- 两列布局：Phase 1左 | Phase 2右，中间能体现从phase1到phase2的连接感
- Phase标题简洁（Authoring vs Delivery），description各一行
- Solution居中向下，体现整合两个phase的感觉
- Visual: [Phase 1] → [Phase 2] 然后到 [Paper's Solution]


---

## Section 2: Module-Product Foundation

**Challenge**
Received a vague brief—"Build a computational document editor."

**Workshop Approach**
Used physical cards to simulate real scenarios with the team: import model → run analysis → generate charts → write conclusions.

**Core Insights**

**1. Users need to reference data from multiple sources**
Engineers pull data from different places—models from ODE+ simulation apps, code, external table files—and combine them into analysis workflows.

**Design decision:** Modular system where Code, Text, Table, Plot modules can be assembled like building blocks. Models from other ODE+ apps can be imported directly.

**2. Module relationships determine data flow**
Modules form parent-child relationships. When a parent updates, children auto-refresh.

**排版建议：**
- Workshop照片（卡片推演场景）左侧或顶部
- 右侧/下方：大尺寸模块关系diagram（展示6种模块类型 + 各自用途：Code执行生成数据、Chart/Table可视化、Text展示信息 + I/O连接规则）
- 小尺寸附图贴在diagram不重叠处：parent-child linking示意（parent更新→child刷新）

---

## Section 3: Interaction & Component Design

**General Module Capabilities**
All modules share unified behaviors: drag to reposition, resize, slash-command insertion.
Parent-child relationships: Modules bind to data sources for data traceability and automatic updates.

**Code Module**
Dual-view switching (code ⇄ diagram) + upstream data binding capability.

**Visualization Modules**
Table and Plot can switch views within the same module while preserving data source.

**排版建议：**
- Code module高保真组件（展示code/diagram切换 + binding UI）
- Visualization module高保真组件（Table/Plot切换界面）
- 可选：通用模块behavior演示（drag/resize/slash-command）

---

## Section 4: AI + Module-based

**Paper's Opportunity**
With modular structure and parent-child relationships in place, AI can understand complete workflows. This enables AI to accelerate analysis.

Definition for Paper AI: **AI shouldn't be a general chatbot** but a **collaborator embedded in the workflow**.

**Design Principles**
1. **Context-aware**: AI understands module types, data sources, and relationships
2. **Workflow-embedded**: Triggered at natural friction points—error states, empty modules, result exploration
3. **Transparent**: Shows data sources and reasoning for every generation

**Core Mechanisms**

**Mechanism 1: Module-specific AI commands**
Code modules: generate, fix errors, refactor. Table/Plot modules: analyze data, create visualizations, natural language Q&A. AI provides relevant commands based on module type.

**Mechanism 2: Dual entry points**
Quick Add: Generate new modules based on existing results. In-module invoke: Refine current module content. Both show preview before acceptance.

**Mechanism 3: Transparent provenance**
Every AI-generated output displays its data source and reasoning path—building trust and enabling verification.

**排版建议：**
- 设计原则（3个原则配简单icon）
- 3个mechanisms可视化展示（小标题可隐藏，只展示mechanism内容）
- 素材：不同Module的AI command界面、Quick Add vs In-module invoke对比、Provenance显示示例

---

## Section 5: Impact & Future Directions

**Impact**
Launched public beta December 2025. Since then, we've welcomed ODE Believers from institutions including German Aerospace Center, Rensselaer Polytechnic Institute, Technical University of Munich, and LTX Simulation GmbH.

**Next Step**
Viewer-side AI: enabling readers to ask questions and explore results interactively.

**Closing Statement**
> The goal isn't smarter AI—it's clearer workflows where human insight and machine speed work in tandem.

**排版建议：**
- 简洁收尾


---

# Presenter Notes (Summary)
- **Hero**: 30-45 sec intro.
- **Section 1**: 2 min on pain points and "Writing = Analysis".
- **Section 2**: Workshop and Dual-mode insights.
- **Section 3**: Composable system and Parent-Child linking.
- **Section 4**: AI as a collaborator (Context-aware).
- **Section 5**: Impact and closing philosophy.

## Content Mapping
- Hero → index.html #hero-section
- Section 1 (Pain Points) → index.html #pain-points
- Section 2 (Product Form) → index.html #product-form
- Section 3 (Interactions) → index.html #interactions
- Section 4 (AI Workflow) → index.html #ai-workflow
- Section 5 (Impact) → index.html #impact
