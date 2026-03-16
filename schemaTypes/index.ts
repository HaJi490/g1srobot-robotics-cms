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
import policy from './documents/policy'

import { contactItem } from './objects/contactItem'
import { locationInfo } from './objects/locationInfo'

export const schemaTypes = [
    component,
    robot,
    system,
    industry,
    productLine,
    useCase,
    techDoc,
    client,
    siteSettings,
    homeConfig,
    companyConfig,
    policy,
    // 타입 사용시 필요
    contactItem,
    locationInfo
]
