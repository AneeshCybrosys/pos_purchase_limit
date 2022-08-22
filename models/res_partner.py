# -*- coding: utf-8 -*-
from odoo import models, fields


class Partner(models.Model):
    _inherit = "res.partner"

    purchase_limit = fields.Boolean(default=False, string='Activate Purchase Limit')
    limit = fields.Float(string='Purchase Limit')
