import Navbar from "@/components/Navbar";
import AnalysisSidebar from "@/components/analysis/AnalysisSidebar";
import { createContext, useState } from "react";
import { data as demoData } from "../../data/demo_data";

export const AnalysisContext = createContext();

const Analysis = () => {
  const [analysisData, setAnalysisData] = useState(demoData);
  const [analysisFilters, setAnalysisFilters] = useState({
    drug_name: "",
    labo_name: "",
    category: [],
    subcategory: "",
    min_month: "",
    max_month: "",
    min_year: "",
    max_year: "",
  });

  return (
    <>
      <AnalysisContext.Provider
        value={{
          analysisData,
          setAnalysisData,
          analysisFilters,
          setAnalysisFilters,
        }}
      >
        <Navbar />
        <div className="p-0 font-inter px-[20px] flex flex-row">
          <AnalysisSidebar />
        </div>
      </AnalysisContext.Provider>
    </>
  );
};

export default Analysis;
