# Asset Inventory

## 📁 Image Assets Location

All images should be placed in:
```
/assets/images/
├── hero/           ← Hero section images (project cover)
├── section-1/      ← Phase 1/2 workflow visuals
├── section-2/      ← Workshop photos, module diagrams
├── section-3/      ← Code module UI, Visualization UI
├── section-4/      ← AI commands, dual entry, provenance
├── section-5/      ← Logos (if needed)
└── logos/          ← Institution logos
```

---

## Required Assets by Section

### Hero Section
**Location:** `assets/images/hero/`
- [ ] `cover.png` - Project Cover / Hero Screenshot (16:10 aspect ratio)

### Section 1: User Pain Points & Insights
**Location:** `assets/images/section-1/`
- [ ] `phase-1-authoring.png` - Authoring Workflow Visual (4:3)
- [ ] `phase-2-delivery.png` - Delivery Problem Visual (4:3)

### Section 2: Module-Product Foundation
**Location:** `assets/images/section-2/`
- [ ] `workshop.png` - Workshop Photo (card scenario simulation) (4:3)
- [ ] `module-diagram.png` - Module Relationship Diagram (16:9)
  - Should show: 6 module types + I/O connections + parent-child linking

### Section 3: Interaction & Component Design
**Location:** `assets/images/section-3/`
- [ ] `code-module.png` - Code Module UI (code/diagram switch + binding) (4:3)
- [ ] `viz-module.png` - Table/Plot Module UI (view switching) (4:3)

### Section 4: AI + Module-based
**Location:** `assets/images/section-4/`
- [ ] `ai-commands.png` - AI Command UI by Module Type (4:3)
- [ ] `dual-entry.png` - Quick Add vs In-module Invoke (4:3)
- [ ] `provenance.png` - Provenance Display Example (4:3)

### Section 5: Impact & Future
**Location:** `assets/images/section-5/` or `assets/images/logos/`
- [ ] Institution logos (optional - currently using text tags)

---

## How to Use Images

Once you add images, update `CaseStudy.tsx` to replace `PlaceholderImage` components:

**Before:**
```tsx
<PlaceholderImage label="Workshop Photo" aspect="aspect-[4/3]" />
```

**After:**
```tsx
<img 
  src="/assets/images/section-2/workshop.png" 
  alt="Workshop Photo"
  className="w-full aspect-[4/3] object-cover"
/>
```

---

## Asset Status
✅ Ready | 🔄 In Progress | ⏳ Pending | 🔴 Blocked

| Section | Asset | Status |
|:--------|:------|:-------|
| Hero | Project Cover | ⏳ |
| Section 1 | Phase 1 Visual | ⏳ |
| Section 1 | Phase 2 Visual | ⏳ |
| Section 2 | Workshop Photo | ⏳ |
| Section 2 | Module Diagram | ⏳ |
| Section 3 | Code Module UI | ⏳ |
| Section 3 | Viz Module UI | ⏳ |
| Section 4 | AI Commands | ⏳ |
| Section 4 | Dual Entry | ⏳ |
| Section 4 | Provenance | ⏳ |
