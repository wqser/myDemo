/**
 * Created by wqs on 2016/11/11.
 */
define(['ojs/ojcore', 'knockout', 'jquery',
    'ojs/ojknockout', 'ojs/ojfilmstrip', 'ojs/ojpagingcontrol'],function(oj,ko,$){
    function pageControlModel(){
        var self = this;

        self.chemicals = [
            { name: 'Hydrogen' },
            { name: 'Helium' },
            { name: 'Lithium' },
            { name: 'Beryllium' },
            { name: 'Boron' },
            { name: 'Carbon' },
            { name: 'Nitrogen' },
            { name: 'Oxygen' },
            { name: 'Fluorine' },
            { name: 'Neon' },
            { name: 'Sodium' },
            { name: 'Magnesium' }
        ];
        self.pagingModel = null;

        getItemInitialDisplay = function(index)
        {
            return index < 3 ? '' : 'none';
        };

        getPagingModel = function()
        {
            if (!self.pagingModel)
            {
                var filmStrip = $("#film");
                var pagingModel = filmStrip.ojFilmStrip("getPagingModel");
                self.pagingModel = pagingModel;
            }
            return self.pagingModel;
        };
    };
    return pageControlModel();
})
