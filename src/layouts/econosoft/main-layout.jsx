import React from 'react';
import TopBar from '../../components/econosoft/top-bar/top-bar';
import DrawerMenu from '../../components/econosoft/drawer-menu/drawer-menu';
import Footer from '../../components/econosoft/footer/footer';
import './main-layout.scss';
import '../../styles/main.scss';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        open: false
      }
    };
    this.handleToggleMenu = this.toggleMenu.bind(this);
  }

  render() {
    return (
      <div className={'econosoft main-layout'}>
        <TopBar onMenuClick={this.handleToggleMenu} />
        <DrawerMenu visible={this.state.menu.open} onScrimClick={this.handleToggleMenu}/>
        <div className={'mdc-top-app-bar--fixed-adjust content'}>
          {this.props.children}
        </div>
        <Footer />
      </div>);
  }

  toggleMenu() {
    this.setState({menu: {open: !this.state.menu.open}});
  }
}

export default MainLayout;
