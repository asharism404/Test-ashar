// ============================================================
// EXISTING SUBJECTS
// ============================================================

const PHARMACOLOGY_DATA = [
    ["General Pharmacology", "Antiepileptic drugs", "**", "", "Important"],
    ["Chemotherapy", "Antimalarial drugs / ACT", "**", "", "Important"],
    ["Chemotherapy", "Antitubercular drugs / MDR-TB", "**", "", "Important"],
    ["Cardiovascular Pharmacology", "Antihypertensive drugs", "**", "", "Important"],
    ["Endocrine Pharmacology", "Corticosteroids", "**", "", "Important"],
    ["Endocrine Pharmacology", "Oral hypoglycaemic drugs", "**", "", "Important"],
    ["Endocrine Pharmacology", "Insulin", "**", "", "Important"],
    ["Cardiovascular Pharmacology", "ACE inhibitors", "*", "", "Important"],
    ["Cardiovascular Pharmacology", "CHF treatment", "*", "", "Important"],
    ["Autonomic Pharmacology", "Adrenaline", "**", "", "Important"],
    ["Cardiovascular Pharmacology", "Beta blockers", "**", "", "Important"],
    ["Autonomic Pharmacology", "Anticholinesterases", "*", "", "Important"],
    ["Autonomic Pharmacology", "Organophosphate poisoning", "***", "", "Important"],
    ["Analgesics & NSAIDs", "NSAIDs / Aspirin", "**", "", "Important"],
    ["General Chemotherapy", "Antimicrobial selection", "*", "", "Important"],
    ["Antibacterial Drugs", "Cephalosporins", "**", "", "Important"],
    ["Antibacterial Drugs", "Penicillins", "**", "", "Important"],
    ["Antibacterial Drugs", "Aminoglycosides", "*", "", "Important"],
    ["CNS Pharmacology", "Antipsychotics / antidepressants", "**", "", "Important"],
    ["CNS Pharmacology", "Opioids", "**", "", "Important"],
    ["GIT Pharmacology", "Peptic ulcer drugs", "**", "", "Important"],
    ["Renal Pharmacology", "Diuretics / Furosemide", "**", "", "Important"],
    ["Blood Pharmacology", "Iron preparations", "*", "", "Important"],
    ["Cardiovascular Pharmacology", "Statins", "*", "", "Important"],
    ["Obstetric Pharmacology", "Oxytocics", "*", "", "Important"],
    ["Reproductive Pharmacology", "Oral contraceptives", "**", "", "Important"]
];

const PATHOLOGY_DATA = [
    ["General Pathology", "Necrosis", "**", "", "Important"],
    ["General Pathology", "Apoptosis", "**", "", "Important"],
    ["General Pathology", "Amyloidosis", "**", "", "Important"],
    ["General Pathology", "Oedema", "*", "", "Important"],
    ["General Pathology", "Thrombosis", "***", "", "Important"],
    ["General Pathology", "Embolism", "**", "", "Important"],
    ["Inflammation", "Acute inflammation", "***", "", "Important"],
    ["Repair", "Wound healing", "**", "", "Important"],
    ["Neoplasia", "Neoplasia", "***", "", "Important"],
    ["Neoplasia", "Metastasis", "***", "", "Important"],
    ["Neoplasia", "Chemical carcinogenesis", "*", "", "Important"],
    ["Haematology", "Anaemia", "***", "", "Important"],
    ["Haematology", "Megaloblastic anaemia", "**", "", "Important"],
    ["Haematology", "Leukemia", "***", "", "Important"],
    ["Cardiovascular Pathology", "Atherosclerosis", "***", "", "Important"],
    ["Cardiovascular Pathology", "Myocardial infarction", "***", "", "Important"],
    ["Respiratory Pathology", "Lung carcinoma", "**", "", "Important"],
    ["Respiratory Pathology", "Lobar pneumonia", "**", "", "Important"],
    ["GIT Pathology", "Gastric carcinoma", "**", "", "Important"],
    ["GIT Pathology", "Colorectal carcinoma", "**", "", "Important"],
    ["Hepatobiliary Pathology", "Jaundice", "***", "", "Important"],
    ["Hepatobiliary Pathology", "Alcoholic liver disease", "**", "", "Important"],
    ["Renal Pathology", "Glomerulonephritis", "***", "", "Important"],
    ["Breast Pathology", "Breast carcinoma", "***", "", "Important"],
    ["Endocrine Pathology", "Diabetes mellitus", "**", "", "Important"],
    ["CNS Pathology", "Meningitis", "**", "", "Important"],
    ["Lymphoreticular Pathology", "Hodgkin lymphoma", "**", "", "Important"],
    ["Bone Pathology", "Osteosarcoma", "*", "", "Important"]
];

const MICROBIOLOGY_DATA = [
    ["General Microbiology", "Sterilization / Autoclave", "***", "", "Important"],
    ["General Microbiology", "Bacterial genetics / Gene transfer", "**", "", "Important"],
    ["Bacteriology", "Tuberculosis", "***", "", "Important"],
    ["Bacteriology", "Enteric fever", "**", "", "Important"],
    ["Bacteriology", "Syphilis / Spirochetes", "**", "", "Important"],
    ["Bacteriology", "Vibrio cholerae", "**", "", "Important"],
    ["Bacteriology", "Chlamydia", "*", "", "Important"],
    ["Bacteriology", "Clostridium", "**", "", "Important"],
    ["Bacteriology", "Streptococcus", "**", "", "Important"],
    ["Clinical Microbiology", "UTI", "**", "", "Important"],
    ["Clinical Microbiology", "Meningitis", "***", "", "Important"],
    ["Clinical Microbiology", "PUO", "*", "", "Important"],
    ["Virology", "HIV", "***", "", "Important"],
    ["Virology", "Hepatitis B", "***", "", "Important"],
    ["Virology", "Influenza", "**", "", "Important"],
    ["Immunology", "Antigen-antibody reactions", "**", "", "Important"],
    ["Immunology", "Immunoglobulins", "***", "", "Important"],
    ["Immunology", "Hypersensitivity", "***", "", "Important"],
    ["Mycology", "Dermatophytes", "*", "", "Important"],
    ["Mycology", "Opportunistic mycoses", "**", "", "Important"],
    ["Parasitology", "Malaria", "***", "", "Important"],
    ["Parasitology", "Leishmaniasis", "**", "", "Important"],
    ["Parasitology", "Ascariasis", "*", "", "Important"],
    ["Parasitology", "Hookworm", "*", "", "Important"],
    ["Parasitology", "Cestodes", "*", "", "Important"]
];

const FMT_DATA = [
    ["Medical Jurisprudence", "Medical negligence", "***", "", "Important"],
    ["Medical Jurisprudence", "Consent", "***", "", "Important"],
    ["Medical Jurisprudence", "Dying declaration", "**", "", "Important"],
    ["Forensic Identification", "DNA fingerprinting", "***", "", "Important"],
    ["Thanatology", "Time since death", "***", "", "Important"],
    ["Thanatology", "Rigor mortis", "***", "", "Important"],
    ["Mechanical Injuries", "Hanging", "***", "", "Important"],
    ["Mechanical Injuries", "Strangulation", "***", "", "Important"],
    ["Mechanical Injuries", "Drowning", "***", "", "Important"],
    ["Mechanical Injuries", "Burns", "***", "", "Important"],
    ["Mechanical Injuries", "Skull fractures", "**", "", "Important"],
    ["Mechanical Injuries", "Firearm injuries", "***", "", "Important"],
    ["Sexual Offences", "Sexual assault examination", "***", "", "Important"],
    ["Forensic Obstetrics", "Live birth / Hydrostatic test", "**", "", "Important"],
    ["Toxicology", "Snakebite", "***", "", "Important"],
    ["Toxicology", "Organophosphorus poisoning", "***", "", "Important"],
    ["Toxicology", "Opium poisoning", "**", "", "Important"],
    ["Toxicology", "Methanol poisoning", "**", "", "Important"],
    ["Toxicology", "Lead poisoning", "**", "", "Important"],
    ["Toxicology", "Aluminium phosphide poisoning", "***", "", "Important"],
    ["Toxicology", "Strychnine poisoning", "*", "", "Important"],
    ["Toxicology", "Barbiturate poisoning", "*", "", "Important"],
    ["Toxicology", "Duties of doctor in poisoning", "**", "", "Important"]
];


// ============================================================
// ADD ALL 7 SUBJECTS TO DATABASE
// ============================================================

addBhalaniData(
    "Pharmacology",
    "MUHS / High-Yield Dataset",
    PHARMACOLOGY_DATA
);

addBhalaniData(
    "Pathology",
    "MUHS / High-Yield Dataset",
    PATHOLOGY_DATA
);

addBhalaniData(
    "Microbiology",
    "MUHS / High-Yield Dataset",
    MICROBIOLOGY_DATA
);

addBhalaniData(
    "Forensic Medicine & Toxicology",
    "MUHS / High-Yield Dataset",
    FMT_DATA
);


// ============================================================
// ULTRA HIGH-YIELD TOPICS
// ============================================================

const ULTRA = {
    "Anatomy": [
        "Scalp clinical importance",
        "Parotid gland",
        "TMJ",
        "Carotid sheath",
        "Cavernous sinus",
        "Extra-ocular muscles",
        "Nasal septum",
        "Tongue",
        "Facial nerve",
        "Corpus callosum",
        "Circle of Willis",
        "Mammary gland",
        "Shoulder joint",
        "Cubital fossa",
        "Sciatic nerve",
        "Popliteal fossa",
        "Stomach",
        "Appendix",
        "Ischiorectal fossa",
        "Uterus",
        "Anal canal"
    ],

    "Physiology": [
        "Neuromuscular junction",
        "Blood coagulation",
        "Cardiac cycle",
        "Normal ECG",
        "Cardiac output",
        "Baroreceptor mechanism",
        "Hypovolaemic shock",
        "Oxygen transport",
        "CO2 transport",
        "GFR",
        "Counter-current mechanism",
        "HCl secretion",
        "Growth hormone",
        "Thyroid hormone",
        "Spermatogenesis",
        "Pain pathways",
        "Pyramidal tract",
        "Accommodation",
        "Dark adaptation",
        "Hypothalamus and temperature regulation"
    ],

    "Biochemistry": [
        "Glycosaminoglycans",
        "HMP shunt",
        "Isoenzymes",
        "Phospholipids",
        "Beta oxidation",
        "Cholesterol biosynthesis",
        "Urea cycle",
        "Glycine metabolism",
        "ETC",
        "Heme synthesis",
        "Metabolic acidosis and alkalosis",
        "Vitamin A",
        "Vitamin D",
        "Iron metabolism",
        "Protein-energy malnutrition",
        "Genetic code",
        "DNA replication",
        "Secondary messengers",
        "Tumour markers",
        "Electrophoresis",
        "Starvation"
    ],

    "Pathology": [
        "Necrosis",
        "Apoptosis",
        "Amyloidosis",
        "Thrombosis",
        "Acute inflammation",
        "Wound healing",
        "Neoplasia",
        "Metastasis",
        "Anaemia",
        "Leukemia",
        "Atherosclerosis",
        "Myocardial infarction",
        "Lung carcinoma",
        "Jaundice",
        "Glomerulonephritis",
        "Breast carcinoma"
    ],

    "Pharmacology": [
        "Antiepileptic drugs",
        "Antimalarial drugs / ACT",
        "Antitubercular drugs / MDR-TB",
        "Antihypertensive drugs",
        "Corticosteroids",
        "Oral hypoglycaemic drugs",
        "Insulin",
        "ACE inhibitors",
        "CHF treatment",
        "Adrenaline",
        "Beta blockers",
        "Organophosphate poisoning",
        "NSAIDs / Aspirin",
        "Cephalosporins",
        "Penicillins",
        "Antipsychotics / antidepressants",
        "Opioids",
        "Peptic ulcer drugs",
        "Diuretics / Furosemide"
    ],

    "Microbiology": [
        "Sterilization / Autoclave",
        "Bacterial genetics / Gene transfer",
        "Tuberculosis",
        "Enteric fever",
        "Syphilis / Spirochetes",
        "Vibrio cholerae",
        "Clostridium",
        "Streptococcus",
        "UTI",
        "Meningitis",
        "HIV",
        "Hepatitis B",
        "Antigen-antibody reactions",
        "Immunoglobulins",
        "Hypersensitivity",
        "Malaria",
        "Leishmaniasis"
    ],

    "Forensic Medicine & Toxicology": [
        "Medical negligence",
        "Consent",
        "Dying declaration",
        "DNA fingerprinting",
        "Time since death",
        "Rigor mortis",
        "Hanging",
        "Strangulation",
        "Drowning",
        "Burns",
        "Skull fractures",
        "Firearm injuries",
        "Sexual assault examination",
        "Snakebite",
        "Organophosphorus poisoning",
        "Methanol poisoning",
        "Aluminium phosphide poisoning"
    ]
};


// ============================================================
// SUBJECT LIST
// ============================================================

const SUBJECTS = [
    "Anatomy",
    "Physiology",
    "Biochemistry",
    "Pathology",
    "Pharmacology",
    "Microbiology",
    "Forensic Medicine & Toxicology"
];


// ============================================================
// APPLICATION STATE
// ============================================================

let selectedAnswerType = "LAQ";
let generatedPrompt = "";
let lastAnswer = "";


// ============================================================
// PAGE NAVIGATION
// ============================================================

function showPage(id, button) {

    document
        .querySelectorAll(".page")
        .forEach(p => p.classList.remove("active"));

    const page = document.getElementById(id);

    if (page) {
        page.classList.add("active");
    }

    document
        .querySelectorAll(".nav-btn")
        .forEach(b => b.classList.remove("active"));

    if (button) {
        button.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (id === "pyq") {
        renderPYQs();
    }

    if (id === "dashboard") {
        renderDashboard();
    }
}


// ============================================================
// ANSWER TYPE
// ============================================================

function selectAnswerType(el) {

    document
        .querySelectorAll(".option")
        .forEach(x => x.classList.remove("selected"));

    el.classList.add("selected");

    selectedAnswerType = el.dataset.type;
}


// ============================================================
// SUBJECT-SPECIFIC ANSWER RULES
// ============================================================

function getSubjectRules(subject) {

    const rules = {

        "Anatomy": [
            "definition/identification where relevant",
            "gross anatomy and relations",
            "attachments, boundaries and contents where relevant",
            "blood supply",
            "nerve supply",
            "lymphatic drainage",
            "development/embryology where relevant",
            "histology where relevant",
            "applied/clinical anatomy",
            "well-labelled diagrams and key relations"
        ],

        "Physiology": [
            "definition and normal values where relevant",
            "mechanism/sequence of events",
            "ionic, neural or hormonal basis where relevant",
            "regulation and feedback mechanisms",
            "functions and physiological significance",
            "important graphs/flowcharts/diagrams",
            "clinical applications",
            "normal vs abnormal comparison where relevant",
            "high-yield viva points"
        ],

        "Biochemistry": [
            "definition/classification",
            "site and pathway of metabolism",
            "key reactions and rate-limiting enzymes",
            "regulation",
            "energy yield where relevant",
            "clinical/medical significance",
            "inborn errors or disorders where relevant",
            "laboratory correlations",
            "important vitamins/cofactors",
            "flowcharts and pathway diagrams"
        ],

        "Pathology": [
            "definition",
            "classification",
            "etiology/risk factors",
            "pathogenesis",
            "gross morphology",
            "microscopic morphology",
            "clinical features",
            "complications",
            "laboratory diagnosis",
            "important differential tables"
        ],

        "Pharmacology": [
            "definition/classification",
            "prototype drugs",
            "mechanism of action",
            "pharmacological actions",
            "pharmacokinetics where relevant",
            "therapeutic uses with rationale",
            "adverse effects",
            "contraindications",
            "drug interactions",
            "important clinical pearls"
        ],

        "Microbiology": [
            "classification",
            "morphology",
            "culture characteristics",
            "pathogenesis",
            "virulence factors",
            "clinical manifestations",
            "laboratory diagnosis",
            "specimen collection",
            "treatment/prevention where relevant",
            "vaccines/prophylaxis where relevant"
        ],

        "Forensic Medicine & Toxicology": [
            "definition",
            "classification",
            "mechanism/pathophysiology",
            "clinical features",
            "postmortem findings",
            "medicolegal importance",
            "diagnosis/investigation",
            "management/treatment where relevant",
            "important differentiating features",
            "legal terminology where relevant"
        ]
    };

    return rules[subject] || [];
}


// ============================================================
// PROMPT BUILDER
// ============================================================

function buildPrompt() {

    const subject =
        document.getElementById("answerSubject")?.value || "Anatomy";

    const paper =
        document.getElementById("answerPaper")?.value || "MUHS";

    const topic =
        document.getElementById("topicInput")?.value.trim() || "";

    const depth =
        document.getElementById("answerDepth")?.value || "Detailed";

    const emphasis =
        document.getElementById("answerEmphasis")?.value || "Exam-focused";

    if (!topic) {

        toast("Enter a topic or university question first.");

        document.getElementById("topicInput")?.focus();

        return;
    }

    const rules = getSubjectRules(subject);

    generatedPrompt = `
You are an expert Indian MBBS university examination tutor.

ASHARCHIVES — MBBS ANSWER ENGINE

SUBJECT:
${subject}

PAPER / SOURCE:
${paper}

QUESTION TYPE:
${selectedAnswerType}

TOPIC / QUESTION:
${topic}

ANSWER DEPTH:
${depth}

EXTRA EMPHASIS:
${emphasis}

OBJECTIVE:

Generate a high-scoring undergraduate MBBS university examination answer.

Rules:

1. Do not invent facts.
2. Use standard undergraduate textbook terminology.
3. Make the answer easy to reproduce in a university examination.
4. Prioritize clinically relevant and high-yield information.
5. Use headings and subheadings.
6. Use tables where comparison is useful.
7. Mention important diagrams wherever appropriate.
8. Do not unnecessarily add postgraduate-level details.
9. Maintain scientific accuracy.
10. Answer according to the question type and marks.

SUBJECT-SPECIFIC STRUCTURE:

${rules.map((x, i) => `${i + 1}. ${x}`).join("\n")}

QUESTION:

${topic}
`.trim();

    const output =
        document.getElementById("generatedPrompt");

    const panel =
        document.getElementById("promptPanel");

    if (output) {
        output.value = generatedPrompt;
    }

    if (panel) {
        panel.style.display = "block";

        panel.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    toast("University-level prompt generated.");
}


// ============================================================
// COPY PROMPT
// ============================================================

async function copyGeneratedPrompt() {

    if (!generatedPrompt) {
        buildPrompt();
    }

    if (!generatedPrompt) return;

    try {

        await navigator.clipboard.writeText(
            generatedPrompt
        );

        toast("Prompt copied to clipboard.");

    } catch (e) {

        const field =
            document.getElementById("generatedPrompt");

        if (field) {

            field.focus();
            field.select();

            document.execCommand("copy");
        }

        toast("Prompt copied.");
    }
}


// ============================================================
// GEMINI
// ============================================================

async function openGemini() {

    if (!generatedPrompt) {
        buildPrompt();
    }

    if (!generatedPrompt) return;

    try {

        await navigator.clipboard.writeText(
            generatedPrompt
        );

        window.open(
        
