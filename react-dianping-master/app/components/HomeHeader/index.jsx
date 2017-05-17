import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="clear-fix">
              <div className="float-left">深圳</div>
              <div className="float-right">
                <i className="icon-user"></i>
              </div>
              <div>
                <i className="icon-search"></i>
                <input type="text"/>
              </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default HomeHeader

// module.exports = NotFound