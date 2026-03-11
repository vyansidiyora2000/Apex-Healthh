export const SDOH_CATEGORIES = [
  "Income & Distribution",
  "Education",
  "Unemployment & Job Security",
  "Employment Conditions",
  "Early Childhood Development",
  "Food Insecurity",
  "Housing",
  "Social Exclusion",
  "Social Safety Network",
  "Health Services",
  "Indigenous Status",
  "Gender",
  "Race",
  "Disability"
]

export const POPULATION_OPTIONS = [
  "All Populations",
  "Indigenous",
  "Low-Income",
  "Elderly",
  "Children",
  "Women",
  "Immigrants",
  "LGBTQ+",
  "Disability",
  "General Population",
  "Racialized Groups"
]

export const STUDIES = [
  {
    id: 1,
    title: "Housing Instability and Mental Health Outcomes in Urban Indigenous Communities",
    author: "Dr. Sarah Redcloud",
    year: "2023",
    studyType: "Cohort Study",
    targetPopulation: "Indigenous",
    status: "Active",
    overallSdohScore: 74.6,
    description: "Examines the relationship between housing instability and mental health in urban Indigenous populations across three major Canadian cities.",
    sdohScores: {
      "Income & Distribution": 75, "Education": 60, "Unemployment & Job Security": 55,
      "Employment Conditions": 50, "Early Childhood Development": 70, "Food Insecurity": 65,
      "Housing": 95, "Social Exclusion": 85, "Social Safety Network": 80,
      "Health Services": 70, "Indigenous Status": 95, "Gender": 60, "Race": 90, "Disability": 55
    }
  },
  {
    id: 2,
    title: "Food Security Interventions Among Low-Income Families in Nova Scotia",
    author: "Dr. James Tompkins",
    year: "2023",
    studyType: "RCT",
    targetPopulation: "Low-Income",
    status: "Active",
    overallSdohScore: 73.2,
    description: "Evaluates community-based food security programs and their measurable impact on family health outcomes in rural and urban Nova Scotia.",
    sdohScores: {
      "Income & Distribution": 85, "Education": 70, "Unemployment & Job Security": 75,
      "Employment Conditions": 65, "Early Childhood Development": 80, "Food Insecurity": 95,
      "Housing": 70, "Social Exclusion": 75, "Social Safety Network": 85,
      "Health Services": 65, "Indigenous Status": 45, "Gender": 55, "Race": 60, "Disability": 50
    }
  },
  {
    id: 3,
    title: "Early Childhood Development Programs: Racial Disparities in Access",
    author: "Dr. Amara Diallo",
    year: "2022",
    studyType: "Cross-Sectional",
    targetPopulation: "Racialized Groups",
    status: "Completed",
    overallSdohScore: 75.4,
    description: "Investigates racial disparities in access to early childhood development programs and their long-term health equity implications.",
    sdohScores: {
      "Income & Distribution": 80, "Education": 85, "Unemployment & Job Security": 60,
      "Employment Conditions": 55, "Early Childhood Development": 95, "Food Insecurity": 75,
      "Housing": 65, "Social Exclusion": 80, "Social Safety Network": 70,
      "Health Services": 75, "Indigenous Status": 70, "Gender": 65, "Race": 90, "Disability": 60
    }
  },
  {
    id: 4,
    title: "Gender-Based Employment Barriers in the Healthcare Sector",
    author: "Dr. Priya Nair",
    year: "2023",
    studyType: "Survey",
    targetPopulation: "Women",
    status: "Active",
    overallSdohScore: 71.4,
    description: "Examines structural gender-based employment barriers among healthcare workers and their downstream effects on workforce retention.",
    sdohScores: {
      "Income & Distribution": 70, "Education": 80, "Unemployment & Job Security": 85,
      "Employment Conditions": 90, "Early Childhood Development": 50, "Food Insecurity": 45,
      "Housing": 55, "Social Exclusion": 75, "Social Safety Network": 70,
      "Health Services": 80, "Indigenous Status": 50, "Gender": 95, "Race": 75, "Disability": 55
    }
  },
  {
    id: 5,
    title: "Disability and Social Exclusion: Community Integration Programs",
    author: "Dr. Michael Chen",
    year: "2022",
    studyType: "Mixed Methods",
    targetPopulation: "Disability",
    status: "Completed",
    overallSdohScore: 74.6,
    description: "Evaluates the effectiveness of community social integration programs for people with disabilities in reducing health disparities.",
    sdohScores: {
      "Income & Distribution": 65, "Education": 70, "Unemployment & Job Security": 75,
      "Employment Conditions": 70, "Early Childhood Development": 60, "Food Insecurity": 55,
      "Housing": 75, "Social Exclusion": 90, "Social Safety Network": 85,
      "Health Services": 80, "Indigenous Status": 55, "Gender": 70, "Race": 65, "Disability": 95
    }
  },
  {
    id: 6,
    title: "Income Inequality and Rates of Preventable Hospitalizations",
    author: "Dr. Emma Laurent",
    year: "2024",
    studyType: "Retrospective",
    targetPopulation: "General Population",
    status: "Proposed",
    overallSdohScore: 74.3,
    description: "Analyzes the statistical relationship between income inequality metrics and rates of preventable hospitalizations across Canadian provinces.",
    sdohScores: {
      "Income & Distribution": 95, "Education": 75, "Unemployment & Job Security": 80,
      "Employment Conditions": 70, "Early Childhood Development": 65, "Food Insecurity": 80,
      "Housing": 75, "Social Exclusion": 70, "Social Safety Network": 85,
      "Health Services": 90, "Indigenous Status": 60, "Gender": 55, "Race": 70, "Disability": 60
    }
  },
  {
    id: 7,
    title: "Immigrant Health Outcomes and Social Safety Net Access",
    author: "Dr. Rahim Chowdhury",
    year: "2023",
    studyType: "Cohort Study",
    targetPopulation: "Immigrants",
    status: "Active",
    overallSdohScore: 78.2,
    description: "Studies health outcomes for recent immigrants and their ability to access social safety programs within the first five years of arrival.",
    sdohScores: {
      "Income & Distribution": 85, "Education": 80, "Unemployment & Job Security": 90,
      "Employment Conditions": 75, "Early Childhood Development": 70, "Food Insecurity": 75,
      "Housing": 80, "Social Exclusion": 85, "Social Safety Network": 90,
      "Health Services": 80, "Indigenous Status": 55, "Gender": 65, "Race": 85, "Disability": 60
    }
  },
  {
    id: 8,
    title: "Elderly Care: Employment Conditions of Personal Support Workers",
    author: "Dr. Carol MacPherson",
    year: "2022",
    studyType: "Survey",
    targetPopulation: "Elderly",
    status: "Completed",
    overallSdohScore: 72.1,
    description: "Evaluates the working conditions and burnout rates among personal support workers in elderly care and implications for patient outcomes.",
    sdohScores: {
      "Income & Distribution": 75, "Education": 65, "Unemployment & Job Security": 80,
      "Employment Conditions": 95, "Early Childhood Development": 70, "Food Insecurity": 60,
      "Housing": 65, "Social Exclusion": 70, "Social Safety Network": 75,
      "Health Services": 85, "Indigenous Status": 55, "Gender": 75, "Race": 70, "Disability": 65
    }
  }
]

export const KPIS = {
  totalStudies: 8,
  activeStudies: 4,
  completedStudies: 3,
  proposedStudies: 1,
  averageSdohAlignment: 74.2,
  totalPopulationsServed: 8
}

// Aggregate SDOH scores across all studies
export const SDOH_AGGREGATES = SDOH_CATEGORIES.map(cat => ({
  determinant: cat,
  averageScore: Math.round(
    STUDIES.reduce((sum, s) => sum + (s.sdohScores[cat] || 0), 0) / STUDIES.length * 10
  ) / 10
}))
