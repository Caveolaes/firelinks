//坏境配置封装
const env = import.meta.env.MODE||'prod'
const EnvConfig = {
    dev: {
        baseApi: '/api',
        // mockApi: 'https://www.fastmock.site/mock/9daae0373ebca22f70669a22e0d7f245/api',
        mockApi: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
    },
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/9daae0373ebca22f70669a22e0d7f245/api',
    },
    prod: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/9daae0373ebca22f70669a22e0d7f245/api',
    }
}
export default {
    env,
    mockApi: true,
    mock: false,
    namespace: 'manage',
    ...EnvConfig[env]
}
