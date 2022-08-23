# -*- coding: utf-8 -*-
from odoo import models, fields


class Partner(models.Model):
    _inherit = "res.partner"

    purchase_limit = fields.Boolean(default=False, string='Activate Purchase Limit')
    currency_id = fields.Many2one('res.currency',
                                  default=lambda self:
                                  self.env.user.company_id.currency_id.id,
                                  string='Currency')
    limit = fields.Float(string='Purchase Limit')
