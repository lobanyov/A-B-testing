var UXD570 = {
  config: {
    brandsImgSrc: 'https://uc3f56ef02fdf33064a4f7a10619.previews.dropboxusercontent.com/p/orig/AA-kRtMka8E5Vh2V9LfDFtuZq2UgT5nY4RlGzRy1veDsvVMrE2lqwtTOuquuLfyg5vyzFSBtNcMmauLYdPWqUX0NkDJjv6LoxPfbEA5kedS45Hat50oOOrNvXu5JrWtI0QDwrUvVj69cWo9sLisSlOezUFaqQejKecOKTFaVJqleHPfhZxqgmOvSzde44gtEU4K-V1mArPgJEry7tZ1wuNVSd0_Z2ZbOFik-XAfdRJZPd9TXOxsTvtnYwoZM14g0K2-sXVD5VQfj7QQHyKaMFvzJ1hD4oAXepyTE9FGyPkx-cj3CxiONtIIy5rLuVW0XonUFMdui0voiPIp_WV8XuXqx/p.svg?fv_content=true&size_mode=5',
    brandsLogosSrc: {
      schneider: 'https://ucedef7c34117d35bb8867fa802e.previews.dropboxusercontent.com/p/orig/AA-fcjjjOo59KjqFIZ-VVzcTKcfGr13DjH2rT-u3YHbbvkKt9kgcrhf9H9x9uvs-xejxqEm9H59V41yKdInmscwPSuf0oP4YgQN9SPpOP6Wocmn4zpeidJV9-H7H6TP3-UH8kBXJV-aajd4C7dsBNLpyXyHHIoXabtvwaxi7CgR8a3Orgec_i_WcdJAaNYcIb0L_O8KRg4qplq10e3AQ2m5vS8R59k6u7YOwZAp79qemEHT4Llg7AFRbBNweVIGY9W3zOt2gM-jz6LTHK46aVLZt0IhNA4WUiz8mmb5xX7XyCsYBpwOg5OCXSIqZrEde9ki4XFoMl8Qr5Q76MKZZZ6LQ/p.svg?fv_content=true&size_mode=5',
      apc: 'https://uc165279e984063f429e3da8f65d.previews.dropboxusercontent.com/p/orig/AA-hfTcDQAcn2IQ23bFl60L1OmvDkgefVuCZTFgXNu0FN1oUGlqK11jk6QetL-uxGF1CXipd62GQY8N6uyOxLX9MrnCevY9rHsDJZtUaXoQ8BHqP1lHWJlF42PtWjL_H8p_DGriCFDiHoWjQ49wMFZdUUqcT43ChBaesMUIPg4vFeBojwj2teXuCr9E_RR_B6UQqp6-urr9xCGWTog-Sn6HZRIEH6tJveB4gHmqxVnnDqiQN1AxYXYwbGzOAkP0azrnAZaVAl6i5lps5IU6E52GiQxXk6eBefzH2GQnKXsjHlB0Pn8nPZAQOoMDUAknvzWK-TrSFDgtinw4nATcsw8a_/p.svg?fv_content=true&size_mode=5',
      squared: 'https://uc182a35350f1e544560074f345f.previews.dropboxusercontent.com/p/orig/AA8MThbNHfQTalYeqmUyOOlsRjTY0Trvmdss9EyK-1r8-As1PrnHrWNPzo72LNrkFlcmvtgasbxZSWbpTxyFKJRoZ0R1JA_qu0jYdFAvC0CumHifv00trQtizBx5eE6bDMHkwd2PBk7CaLlg_iLfkbpRiGXWozNl46a8OQiPhYYC5HeAJ6gqvoNPyFR98PIQLY7wgXwclwDZQu9uwrNkUpfDa3C_eDKSwpnokVPygediS7FD2g0cU2Fv0FXxuSgPx1YPgBQk6v7LuwsRALZH6tEoHL0WhgSvvjQDihLcXfeT0R3xnpf66HGPN6kUe2I66Bicjkm9sKcyg8M5mRwKV5VG/p.svg?fv_content=true&size_mode=5',
      asco: 'https://uc1c4091aebaade75bbd7a17b29a.previews.dropboxusercontent.com/p/orig/AA_jhr2DHzCDiOMfrRuZruFdEl6m9Xepavpnhr12yHuSIDeBSHkMdQOw9KdoIoce-rEdl4gGtuX_6W9WekCe2HNKK4V9LJYDZcTPR8TEpbmshWsQacTXh2lTUljb4CjzswDZe6dJPYeN2tv8OKYbqb_1z-lchzdg6oLikB1D7yZ2p8bSQSEpxr7LuSQio9gWseXcjv5B80ZYya-3ExuE25JsJ-FmFI2I7VFqFX1LuJMCZmxjGm6XDx9rqsiyQFRtq81aQIfFHqgn5zuIHARvYu0pghc_vi_QwBiQ-kEVdUdumEO_VKhQKYtW0WXJ70qlx_JOJqq4I14OQVqzJ2ZDw5Yq/p.svg?fv_content=true&size_mode=5',
    }
  },

  selectors: {
    headerContent: '.sdl-header-se_content',
    headerNav: '.sdl-header-se_mm-wrap',
    headerMetabar: '.sdl-header-se_metabar-site-info',
    metabarBtn: '.js-header-metabar-country',
    arrowIcon: '.sdl-header-se_metabar-icon-caret-wrap',
  },

  getNodes: function() {
    this.nodes = {
      headerContent: document.querySelector(this.selectors.headerContent),
      headerNav: document.querySelector(this.selectors.headerNav),
      headerMetabar: document.querySelector(this.selectors.headerMetabar),
      metabarBtn: document.querySelector(this.selectors.metabarBtn),
      arrowIcon: document.querySelector(this.selectors.arrowIcon),
    };
  },

  createMetabarItem: function() {
    var metabarItem = document.createElement('li');
    var brandsButton = document.createElement('button');
    var brandsLogo = document.createElement('img');

    brandsLogo.src = this.config.brandsImgSrc;
    brandsLogo.style.cssText = 'align-self: center; width: 16px; height: 16px; margin-right: 5px;';

    metabarItem.className = 'sdl-header-se_metabar-site-info-cd';

    Array.from(this.nodes.metabarBtn.attributes).forEach(function(key) {
      if (key.name === 'class') {
        brandsButton.classList.add(
          'sdl-header-se_metabar-item',
          'sdl-header-se_metabar-toggle',
          'js-header-metabar-brands'
        );
      } else if (key.name === 'xtm-n') {
        return;
      } else {
        brandsButton.setAttribute(key.name, key.value);
      }
    });


    brandsButton.append(
      brandsLogo,
      document.createElement('span').innerText = 'Our brands',
      this.nodes.arrowIcon.cloneNode(true)
    );
    metabarItem.append(brandsButton);
    this.nodes.headerMetabar.append(metabarItem);
  },

  createBrandsTab: function() {
    var brandsTab = document.createElement('ul');
    brandsTab.className = 'uxd-570-brands-tab';

    Object.values(this.config.brandsLogosSrc).forEach(function(source) {
      var brandTile = document.createElement('li');
      brandTile.className = 'uxd-570-brand-tile';
      var logo = document.createElement('img');
      logo.src = source;

      brandTile.append(logo);
      brandsTab.append(brandTile);
    });


    this.nodes.headerMetabar.append(brandsTab);
  },

  applyChanges: function() {
    this.createMetabarItem();
    this.createBrandsTab();
  },

  init: function() {
    if (document.readyState !== 'loading') {
      this.getNodes();
      this.applyChanges();
    } else {
      var _this = this;

      window.addEventListener('load', function() {
        _this.getNodes();
        _this.applyChanges();
      });
    }
  },
};

UXD570.init();
