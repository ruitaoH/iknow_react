import style from 'style/common/menu.scss'

import React from 'react'
import MenuItem from './MenuItem'

class Menu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isSelected: 1
    }

      // 绑定事件
    this.select = this.select.bind(this)
  }

  select (index) {
    return () => {
      this.props.selectPage(index)

      this.setState({
        isSelected: index
      })
    }
  }

  render () {
    return (
      <div className={ style.menu }>
        <MenuItem
          index={1}
          selected={this.state.isSelected}
          select={this.select(1)}
          cssObject={{marginRight: '0.95rem'}}
          data={{
            title: '首页',
            icon_normal: require('image/H.png'),
            icon_selected: require('image/Hon.png')
          }}
        />

        <MenuItem
          index={2}
          selected={this.state.isSelected}
          select={this.select(2)}
          cssObject={{marginRight: '0.65rem'}}
          data={{
            title: '专题',
            icon_normal: require('image/U.png'),
            icon_selected: require('image/Uon.png')
          }}
        />

        <MenuItem
          index={3}
          selected={this.state.isSelected}
          select={this.select(3)}
          data={{
            center: true,
            icon: require('image/logo-bottom.png')
          }}
        />

        <MenuItem
          index={4}
          selected={this.state.isSelected}
          select={this.select(4)}
          cssObject={{marginLeft: '0.65rem'}}
          data={{
            title: '通知',
            icon_normal: require('image/S.png'),
            icon_selected: require('image/Son.png')
          }}
        />

        <MenuItem
          index={5}
          selected={this.state.isSelected}
          select={this.select(5)}
          cssObject={{marginLeft: '0.95rem'}}
          data={{
            title: '个人',
            icon_normal: require('image/T.png'),
            icon_selected: require('image/Ton.png')
          }}
        />
      </div>
    )
  }
}

export default Menu
