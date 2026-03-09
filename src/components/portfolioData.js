export const allProjects = [
  {
    Title: "AI-WhatsApp integration for Lane",
    Category: "Software Development",
    Skills: "Context Engineering, Prompt Engineering",
    Summary:" Initialize the core integration between WhatsApp and a Large Language Model(Qwen 3) for lane.co.ke. This system automates client query handling and product sales for auto parts.\n- Establish webhook endpoints for WhatsApp Business API. \n - Integrate LLM agent to parse user queries and identify auto parts. \n - Implement product catalog lookup and recommendation logic. \n - Enable automated order placement and checkout flow."
  },
  {
    Title: "Heart Attack Predictor",
    Category: "Supervised Learning - Classification",
    Skills: "Logistic Regression, AUC-ROC Curve",
    Summary:
      "An inital linear model was built to explain predict the likelihood for an individiual to get a heart attach. The base model was tuned using the Receiver Operting Charactertistc (ROC) curve to obtain the optimal threshold for highest accuracy. The model adjusted with this threshold achieved recall and F1 values of ~79% and ~84% respectively on the training data.",
    Dataset:
      "https://www.kaggle.com/datasets/utkarshx27/heart-disease-diagnosis-dataset",
    File: "https://github.com/ericcharagu/heart_attack/blob/main/Heart_Disease_predictor.ipynb",
  },
  {
    Title: "Energy Consumption Model Predictor",
    Category: "Supervised Learning ",
    Skills: "Logistic Regression",
    Summary:
      " The client is an architectural design firm that is looking to give structural and electrical based designs based on the client's current and future energy usage. The model is trained on 5 distinct climatic conditions and can explain more than 75% of the variance for each group's dataset",
    Dataset:
      "https://www.kaggle.com/datasets/samanemami/renewable-energy-and-weather-conditions",
    File: "https://github.com/ericcharagu/energy_consumption/blob/main/energy_consumption.ipynb",
  },
  {
    Title: "Stock Clustering",
    Category: "Unsupervised Learning",
    Skills: "K-Means Clustering,Hierarchical Clustering ",
    Summary:
      "Analyze the stocks data, grouping the stocks based on the attributes provided, and sharing insights about the characteristics of each group. The groups are based on a risk profile ranging from low risk to high risk",
    Dataset: "https://eportfolio.mygreatlearning.com/eric-charagu",
    File: "https://github.com/ericcharagu/stock_clustering/blob/main/Stock_clustering.ipynb",
  },
  {
    Title: "Generator Failure",
    Category: "Model Tuning",
    Skills: "Up and Downsampling, Regularization, Hyperparameter Tuning",
    Summary:
      " The objective is to build various classification models, tune them and find the best one that will help identify failures so that the generator could be repaired before failing/breaking and the overall maintenance cost of the generators can be brought down",
    Dataset: "https://eportfolio.mygreatlearning.com/eric-charagu",
    File: "https://github.com/ericcharagu/machine_failure/blob/main/machine_failure_predictor.ipynb",
  },
  {
    Title: "Successful Visa Profile",
    Category: "Ensemble Techniques",
    Skills: "Grid Search Cross Validation, Parameter tuning",
    Summary:
      "Analyze the data of Visa applicants, build a predictive model to facilitate the process of visa approvals, and based on important factors that significantly influence the Visa status recommend a suitable profile for the applicants for whom the visa should be certified or denied.",
    Dataset: "https://eportfolio.mygreatlearning.com/eric-charagu",
    File: "https://github.com/ericcharagu/visa_prediction/blob/main/visa_prediction.ipynb",
  },
  {
    Title: "Hotel Booking Cancellation",
    Category: "Supervised Learning - Classification",
    Skills: "Logistic Regression, AUC-ROC Curve",
    Summary:
      "Analyze the data to find which factors strongly influence booking cancellations, build a predictive model that can predict which booking is going to be cancelled in advance, and help in formulating profitable policies for cancellations and refunds.",
    Dataset: "https://eportfolio.mygreatlearning.com/eric-charagu",
    File: "https://github.com/ericcharagu/booking_cancellation/blob/main/booking_cancellation.ipynb",
  },
  /*
  {
    Title: "ReCell",
    Category: "Supervised Learning ",
    Skills: "Linear Regression, Linear Regression Assumptions ",
    Summary:
      "Analyze the used devices dataset, build a model which will help develop a dynamic pricing strategy for used and refurbished devices, and identify factors that significantly influence the price.",
    Dataset: "https://eportfolio.mygreatlearning.com/eric-charagu",
  },
  {
    Title: "E-news Express Project",
    Category: "Business Statistics",
    Skills: "A/B Testing, Hypothesis Testing",
    Summary:
      "This project used statistical analysis, a/b testing, and visualization to decide whether the new landing page of an online news portal (E-news Express) is effective enough to gather new subscribers or not. The simulated dataset has certain important metrics such as converted status and time spent on the page that will help to conclude the effectiveness of the new landing page. Apart from that, the dependence of conversion on the preferred language will also be analyzed in this project.",
    Dataset: "https://eportfolio.mygreatlearning.com/eric-charagu",
  }, */
];
