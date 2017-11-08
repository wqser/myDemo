/**
 * Created by wqs on 2016/11/10.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtree'],function(oj,ko,$){
function treeModel(){
    self=this;
    self.data = [
        {
            "title": "News",
            "attr": {"id": "news"}
        },
        {
            "title": "Blogs",
            "attr": {"id": "blogs"},
            "children": [ { "title": "Today",
                "attr": {"id": "today"}
            },
                { "title": "Yesterday",
                    "attr": {"id": "yesterday"}
                },
                { "title": "Archive",
                    "attr": {"id": "archive"}
                }
            ]
        },
        {
            "title": "Links",
            "attr": {"id": "links"},
            "children": [ { "title": "Oracle",
                "attr": {"id": "oracle"}
            },
                { "title": "IBM",
                    "attr": {"id": "ibm"}
                },
                { "title": "Microsoft",
                    "attr": {"id": "ms"},
                    "children": [ { "title": "USA",
                        "attr": {"id": "msusa"},
                        "children": [ { "title": "North",
                            "attr": {"id": "msusanorth"}
                        },
                            { "title": "South",
                                "attr": {"id": "msusasouth"}
                            },
                            { "title": "East",
                                "attr": {"id": "msusaeast"}
                            },
                            { "title": "West",
                                "attr": {"id": "msusawest"}
                            }
                        ]
                    },
                        { "title": "Europe",
                            "attr": {"id": "msuerope","url":"www.baidu.com"}
                        },
                        { "title": "Asia",
                            "attr": {"id": "msasia"},
                            "children": [ { "title": "Japan",
                                "attr": {"id": "asiajap"}
                            },
                                { "title": "China",
                                    "attr": {"id": "asiachina"}
                                },
                                { "title": "India",
                                    "attr": {"id": "asiaindia"}
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
}
return treeModel();

})
