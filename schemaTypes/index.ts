import component from './documents/component'
import robot from './documents/robot'
import system from './documents/system'
import industry from './documents/industry'
import productLine from './documents/productLine'
import useCase from './documents/useCase'
import techDoc from './documents/techDoc'
import siteSettings from './singletons/siteSettings'
import homeConfig from './singletons/homeConfig'
import companyConfig from './singletons/companyConfig'
import client from './documents/client'

import { contactItem } from './objects/contactItem'


// FIXME 삭제
import page from './page'
import product from './product' 
import faq from './faq'


export const schemaTypes = [
    product,
    component,
    robot,
    system,
    industry,
    productLine,
    useCase,
    techDoc,
    page,
    faq,
    siteSettings,
    homeConfig,
    companyConfig,
    client,

    contactItem
]
