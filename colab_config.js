define(["require",
    'base/js/namespace'
], function (requirejs, Jupyter) {

    var security = requirejs("base/js/security")

    var load_css = function (name) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = requirejs.toUrl(name);
        document.getElementsByTagName("head")[0].appendChild(link);

    };

    window.addEventListener('mousedown',(sender)=>{
        console.log(sender.target);
    })

    //Load_ipython_extension
    var load_ipython_extension = requirejs(['base/js/namespace'], function (Jupyter) {
        "use strict";
        if (Jupyter.version[0] < 3) {
            console.log("This extension requires Jupyter or IPython >= 3.x")
            return
        }

        load_css('./colab_config.css')
    }); //end of load_ipython_extension function

    return {
        load_ipython_extension: load_ipython_extension,
    };
}); //End of main function