const eligibilityData = {
    personal: {
        eligibility: [
            { title: "Age", value: "21 – 55 yrs" },
            { title: "Credit Score", value: "> 659" },
            { title: "Serviceable Area", value: "Metro Cities" },
            { title: "Nationality", value: "Indian" },
            { title: "Monthly Salary", value: "> 15,909" },
            { title: "Mode", value: "Online" }
        ],
        documents: [
            "PAN Card",
            "Aadhaar Card",
            "Electricity Bill",
            "Last 3 Months Bank Statement",
            "Last 3 Months Salary Slips"
        ]
    },

    business: {
        eligibility: [
            { title: "Age", value: "21 – 60 yrs" },
            { title: "Business Vintage", value: "> 1 Year" },
            { title: "Turnover", value: "> ₹3 Lakhs" },
            { title: "Nationality", value: "Indian" },
            { title: "Mode", value: "Online" }
        ],
        documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Proof",
            "Bank Statement"
        ]
    },

    payoff: {
        eligibility: [
            { title: "Credit Score", value: "> 650" },
            { title: "Existing Loans", value: "Required" },
            { title: "Mode", value: "Online" }
        ],
        documents: [
            "PAN Card",
            "Loan Statements"
        ]
    }
};

export default eligibilityData;
