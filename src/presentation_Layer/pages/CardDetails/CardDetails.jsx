import { useState } from "react";


import { MainLayout } from './../../layouts/MainLayout';

export const CardDetails = () => {
  const [AProposData, SetData] = useState({});

  return (
    <div className="content" id="CardDetails">
      	<MainLayout></MainLayout>
    </div>
  );
};
