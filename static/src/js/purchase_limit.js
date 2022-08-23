odoo.define('pos_purchase_limit.purchase_limit', function(require){
    'use strict';
    var models = require('point_of_sale.models');
    var _customer = models.PosModel.prototype;
    const Registries = require('point_of_sale.Registries');
    const ProductScreen = require('point_of_sale.ProductScreen');
    models.load_fields('res.partner', ['purchase_limit','limit', 'currency_id']);

    const PurchaseLimit = (ProductScreen) =>
        class extends ProductScreen{
            constructor() {
            super(...arguments);
            }
        async _onClickPay() {
        if (this.client){
            var order_total = this.currentOrder.get_total_with_tax()
            console.log(this.client.limit < order_total)
             if (this.client.limit < order_total)
             {
                console.log(this.client.currency_id);
                this.showPopup('ErrorPopup', {
                    title: this.env._t("Can't make the payment"),
                    body: _.str.sprintf(
                        this.env._t(`Your Purchase Limit is ${this.client.currency_id[1]} ${this.client.limit}`)),
                });
                return;
             }
        }
        else {
            await this.showPopup('ErrorPopup', {
                title: this.env._t('Please Select A Customer'),
            });
            return;
        }
        await super._onClickPay(...arguments);
        }
        }
        Registries.Component.extend(ProductScreen,PurchaseLimit);
        return PurchaseLimit;
});
