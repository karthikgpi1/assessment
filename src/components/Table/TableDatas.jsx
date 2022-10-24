import DataTable from "react-data-table-component";

import React from "react";

export const TableDatas = () => {
  const columns = [
    {
      // id: 1,
      name: "Title",
      selector: (row) => row.title,
      // sortable: true,
      reorder: true,
    },
    {
      // id: 2,
      name: "Views",
      selector: (row) => row.views,
      // sortable: true,
      reorder: true,
    },
    {
      // id: 3,
      name: "Sales",
      selector: (row) => row.sales,
      sortable: true,
      // right: true,
      reorder: true,
    },
    {
      // id: 4,
      name: "Conversion",
      selector: (row) => row.conversion,
      sortable: true,
      // right: true,
      reorder: true,
    },
    {
      // id: 5,
      name: "Total",
      selector: (row) => row.total,
      // sortable: true,
      // right: true,
      // reorder: true,
    },
  ];

  const data = [
    {
      // id: 1,
      title: "Google.com",
      views: 3746,
      sales: 752,
      conversion: "43%",
      total: "$19,291",
    },
    {
      // id: 2,
      title: "Facebook.com",
      views: 8126,
      sales: 728,
      conversion: "32%",
      total: "$17,638",
    },
    {
      // id: 3,
      title: "twitter.com",
      views: 8836,
      sales: 694,
      conversion: "28%",
      total: "$16,218",
    },
    {
      // id: 3,
      title: "Direct, email, im",
      views: 1173,
      sales: 645,
      conversion: "24%",
      total: "$14,421",
    },
    {
      // id: 3,
      title: "Linkedin.com",
      views: 2739,
      sales: 539,
      conversion: "20%",
      total: "$12,370",
    },
    // {
    //   // id: 3,
    //   title: "Instagram.com",
    //   views: 2379,
    //   sales: 539,
    //   conversion: "20%",
    //   total: "$12,370",
    // },
  ];
  return (
    <div>
      <DataTable
        // title="Refferer"
        columns={columns}
        data={data}
        // fixedHeader
        // fixedHeaderScrollHeight="200px"
        // Header="color:#black"
        // fixedHeaderScrollHeight=""
        highlightOnHover
      />
    </div>
  );
};
