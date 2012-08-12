YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Y.DataTable.Paginator"
    ],
    "modules": [
        "datatable"
    ],
    "allModules": [
        {
            "displayName": "datatable",
            "name": "datatable",
            "description": "Defines a class extension to add capability to support a Paginator View-Model and allow\n paging of actively displayed data within the DT instance.\n\nWorks with either client-side pagination (i.e. local data, usually in form of JS Array) or\n in conjunction with remote server-side pagination, via either DataSource or ModelSync.REST.\n\nAllows for dealing with sorted data, wherein the local data is sorted in place, and in the\n case of remote data the \"sortBy\" attribute is passed to the remote server.\n  \n\tvar dtable = new Y.DataTable({\n      \tcolumns:    [ 'firstName','lastName','state','age', 'grade' ],\n      \tdata:       enrollment.records,\n      \tscrollable: 'y',\n      \theight:     '450px',\n      \tpaginator:  new PaginatorView({\n       \t   \tmodel:  new PaginatorModel({itemsPerPage:50, page:1})\n     \t\t })\n \t });"
        }
    ]
} };
});