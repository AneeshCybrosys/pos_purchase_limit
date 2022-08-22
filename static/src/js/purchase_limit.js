odoo.define('pos_purchase_limit.purchase_limit', function(require){
    'use strict';
    var models = require('point_of_sale.models');
    var _customer = models.PosModel.prototype;
    models.PosModel = models.PosModel.extend({
        initialize: function(session, attributes){
            var self = this;
            models.load_fields('res.partner', ['purchase_limit','limit']);
            _customer.initialize.apply(this, arguments);
        }
    });
});
