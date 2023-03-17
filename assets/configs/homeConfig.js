import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Vasco Oliveira</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Machine Learning Specialist",
        "Open Source Contributor",
        "Backend Developer",
        "Colombian"
    ],
    about: {
        start: "I've been working for over six years on data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Master in Business Analytics & Big Data",
            company: "IE University - School of Science & Technology",
            description: "Test description for this.",
            date: "2022-Present",
            icon: <DiCodeigniter/>,
            tags: ["keywords", "other skills", "python", "sql", "machine learning"]
        },
        {
            id: "work-2",
            title: "Business Operations Working Student",
            company: <a href="https://www.appinio.com/">Appinio</a>,
            description: "Summary of job description & achievements",
            date: "2022-2023",
            icon: <FaMobileAlt/>,
            tags: ["HubSpot", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "CRM Analytics Coordinator",
            company: "Avianca",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "BI Analyst",
            company: "Onelink BPO",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}


export default homeConfig