export const allProjects = [
  {
    Title: "AI‑WhatsApp Integration for Lane",
    Category: "Software Development",
    Skills: "Context Engineering, Prompt Engineering",
    Summary:
      "WhatsApp AI agent that answers queries and closes auto‑parts sales — no human in the loop.",
    Detail:
      "Built the core integration between WhatsApp Business API and a Qwen 3 large language model for lane.co.ke. The system automates inbound client queries and product sales for an auto‑parts retailer, replacing manual back‑and‑forth with an AI agent that understands natural language requests.",
    Highlights: [
      "Webhook endpoints for WhatsApp Business API",
      "LLM agent parses user queries and identifies auto parts",
      "Product catalog lookup with recommendation logic",
      "Automated order placement and checkout flow",
    ],
    Links: [
      {
        label: "Chat on WhatsApp",
        url: "https://wa.me/254733443322?text=Hi%20Lane%2C%20I%20was%20referred%20to%20you%20by%20HFLRQKXQ.%20%Nice20to%20meet%20you.",       variant: "whatsapp",
      },
    ],
  },
  {
  Title: "Ethical AI Infrastructure for Inclusive Finance in Kenya",
  Category: "Research Paper · AI Policy & Governance",
  Skills: "AI Governance, Data Ethics, Financial Inclusion, Regulatory Design",
  Summary:
    "A policy framework for preventing data colonialism, embedding fairness in lending, and using AI to democratise financial literacy in Kenya.",
  Detail:
    "This paper proposes a three-pillar framework for deploying AI responsibly across Kenya's financial sector. First, it advocates for a shared, regulated data infrastructure—jointly owned by banks and telcos, governed by the CBK and ODPC—that turns anonymised customer data from a competitive moat into a collaborative public good. Second, it redefines financial literacy through AI-powered, vernacular-language education that meets customers at every touchpoint, not just onboarding. Third, it establishes governance mechanisms—explainable AI standards, mandatory bias audits, human-in-the-loop appeals, and a multi-stakeholder ethics council—to ensure AI expands access fairly rather than automating historical discrimination at scale.",
  Highlights: [
    "Pillar 1: Regulated shared database to prevent 'data colonialism' and democratise AI innovation for SACCOs and local fintechs",
    "Pillar 2: AI-powered financial literacy delivered in Kiswahili and vernacular languages — reducing NPLs and empowering women, youth, and informal workers",
    "Pillar 3: Explainable AI (XAI) standards, mandatory bias audits, human-in-the-loop appeals, and a multi-stakeholder ethics council",
    "Goal: Make financial inclusion meaningful — not just transactional — while ensuring AI is judged on potential, not historical bias",
  ],
  Links: [
    {
      label: "Read the Paper",
      url: "https://drive.google.com/file/d/17gOs4AFhjZUg_YDozipaHqF8DG-4QwXA/view?usp=drive_link",

      variant: "primary",
    },
  ],
},
  {
    Title: "Heart Attack Predictor",
    Category: "Supervised Learning · Classification",
    Skills: "Logistic Regression, AUC‑ROC Curve",
    Summary:
      "Tuned logistic model hit 79% recall and 84% F1 for heart‑attack risk prediction.",
    Detail:
      "An initial linear model was built to predict the likelihood of an individual suffering a heart attack. The base model was tuned using the Receiver Operating Characteristic (ROC) curve to find the optimal classification threshold for the highest accuracy.",
    Highlights: [
      "Recall of ~79% on training data",
      "F1 score of ~84% after threshold tuning",
      "ROC curve used to select the optimal decision boundary",
    ],
    Links: [
      {
        label: "View Code",
        url: "https://github.com/ericcharagu/heart_attack/blob/main/Heart_Disease_predictor.ipynb",
        variant: "primary",
      },
      {
        label: "Dataset",
        url: "https://www.kaggle.com/datasets/utkarshx27/heart-disease-diagnosis-dataset",
        variant: "secondary",
      },
    ],
  },
  {
    Title: "Energy Consumption Predictor",
    Category: "Supervised Learning",
    Skills: "Logistic Regression",
    Summary:
      "Predicts building energy use across five climates with 75%+ variance explained.",
    Detail:
      "Built for an architectural design firm that needs to produce structural and electrical designs based on a client's current and future energy usage. The model is trained on five distinct climatic conditions and explains more than 75% of the variance for each group's dataset.",
    Highlights: [
      "Trained on 5 distinct climatic regions",
      "Explains 75%+ of variance per climate group",
      "Feeds directly into structural and electrical design decisions",
    ],
    Links: [
      {
        label: "View Code",
        url: "https://github.com/ericcharagu/energy_consumption/blob/main/energy_consumption.ipynb",
        variant: "primary",
      },
      {
        label: "Dataset",
        url: "https://www.kaggle.com/datasets/samanemami/renewable-energy-and-weather-conditions",
        variant: "secondary",
      },
    ],
  },
  {
    Title: "Stock Clustering",
    Category: "Unsupervised Learning",
    Skills: "K‑Means, Hierarchical Clustering",
    Summary:
      "K‑means and hierarchical clustering segment stocks into low‑to‑high risk profiles.",
    Detail:
      "Analyzed stock data to group stocks based on their attributes and share insights about the characteristics of each group. The groupings map to a risk profile spectrum ranging from low‑risk to high‑risk, giving investors a clearer picture of portfolio composition.",
    Highlights: [
      "K‑Means and Hierarchical clustering compared",
      "Groups ranked on a low‑to‑high risk spectrum",
      "Insights delivered per cluster for portfolio decisions",
    ],
    Links: [
      {
        label: "View Code",
        url: "https://github.com/ericcharagu/stock_clustering/blob/main/Stock_clustering.ipynb",
        variant: "primary",
      },
      {
        label: "Dataset",
        url: "https://eportfolio.mygreatlearning.com/eric-charagu",
        variant: "secondary",
      },
    ],
  },
  {
    Title: "Generator Failure",
    Category: "Model Tuning",
    Skills: "Resampling, Regularization, Hyperparameter Tuning",
    Summary:
      "Balanced sampling and tuned classifiers flag generator failures before they cost you.",
    Detail:
      "Built and tuned multiple classification models to identify generator failures early, so units can be repaired before they break. The goal was to reduce the overall maintenance cost of generators by shifting from reactive repairs to predictive intervention.",
    Highlights: [
      "Up‑sampling and down‑sampling for class imbalance",
      "Regularization to prevent overfitting",
      "Hyperparameter tuning to find the best classifier",
    ],
    Links: [
      {
        label: "View Code",
        url: "https://github.com/ericcharagu/machine_failure/blob/main/machine_failure_predictor.ipynb",
        variant: "primary",
      },
      {
        label: "Dataset",
        url: "https://eportfolio.mygreatlearning.com/eric-charagu",
        variant: "secondary",
      },
    ],
  },
  {
    Title: "Successful Visa Profile",
    Category: "Ensemble Techniques",
    Skills: "Grid Search CV, Parameter Tuning",
    Summary:
      "Ensemble model predicts visa approval, guiding stronger applicant profiles.",
    Detail:
      "Analyzed visa applicant data to build a predictive model that facilitates the visa approval process. The model identifies the key factors that significantly influence visa status and recommends a suitable applicant profile for certification or denial.",
    Highlights: [
      "Grid Search Cross Validation for hyperparameter tuning",
      "Feature importance reveals dominant approval factors",
      "Recommended applicant profile per outcome",
    ],
    Links: [
      {
        label: "View Code",
        url: "https://github.com/ericcharagu/visa_prediction/blob/main/visa_prediction.ipynb",
        variant: "primary",
      },
      {
        label: "Dataset",
        url: "https://eportfolio.mygreatlearning.com/eric-charagu",
        variant: "secondary",
      },
    ],
  },
  {
    Title: "Hotel Booking Cancellation",
    Category: "Supervised Learning · Classification",
    Skills: "Logistic Regression, AUC‑ROC Curve",
    Summary:
      "Predicts which bookings will cancel — enabling smarter refund and pricing policies.",
    Detail:
      "Analyzed hotel booking data to find which factors strongly influence cancellations, then built a predictive model that flags at‑risk bookings in advance. The output helps formulate profitable cancellation and refund policies.",
    Highlights: [
      "Identifies key drivers of booking cancellations",
      "Predicts cancellations before check‑in",
      "Informs pricing and refund policy design",
    ],
    Links: [
      {
        label: "View Code",
        url: "https://github.com/ericcharagu/booking_cancellation/blob/main/booking_cancellation.ipynb",
        variant: "primary",
      },
      {
        label: "Dataset",
        url: "https://eportfolio.mygreatlearning.com/eric-charagu",
        variant: "secondary",
      },
    ],
  },
];