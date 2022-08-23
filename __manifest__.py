# -*- coding: utf-8 -*-
{
    'name': "POS Purchase Limit",

    'summary': """
        Adds a new field purchase limit""",

    'description': """
        Description
    """,

    'author': "Minions 6",

    'version': '15.0.1.0.0',
    'depends': ['point_of_sale'],

    'data': [
        'views/res_partner_inherit_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'pos_purchase_limit/static/src/js/purchase_limit.js',
        ]
    }
}
