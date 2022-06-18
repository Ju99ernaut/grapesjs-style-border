export default (editor, opts = {}) => {
  const options = {
    ...{
      // default options
      sector: 'decorations',
      originalBorder: {
        sector: 'decorations',
        name: 'border',
      },
      extendType: {},
      extendWidth: {},
      extendStyle: {},
      extendColor: {},
      extendBorder: {},
      extendBorderTop: {},
      extendBorderLeft: {},
      extendBorderBottom: {},
      extendBorderRight: {},
      at: false,
    }, ...opts
  };

  const sm = editor.Styles;
  const borderProps = [];;
  const pfx = editor.getConfig('stylePrefix');
  const wSelector = `.${pfx}sm-property`; //.${pfx}sm-property__border-width`;
  let typeProps;

  const typeRadio = sm.getType('radio');
  const propModel = typeRadio.model;

  sm.addType('empty-radio', {
    model: propModel.extend({
      getStyle(opts = {}) {
        return '';
      },
    }),
    view: typeRadio.view
  })

  const borderType = {
    property: 'border-type',
    type: 'empty-radio',
    default: 'all',
    options: [
      { value: 'all' },
      { value: 'left' },
      { value: 'right' },
      { value: 'top' },
      { value: 'bottom' },
    ],
    onChange({ property, to }) {
      const { value } = to;
      if (value) {
        borderProps.forEach((borderProp) => {
          const ext = value === 'all' ? '' : `-${value}`;
          const { $el } = borderProp.view;
          $el.show();
          if (borderProp.get('property') !== `border${ext}`) $el.hide();
          else typeProps.view.$el.insertBefore($el.find(wSelector).first());
        });
      }
    },
    ...options.extendType
  }

  const borderStyle = {
    property: 'border-style',
    type: 'select',
    default: 'solid',
    full: 'true',
    options: [
      { value: 'none' },
      { value: 'solid' },
      { value: 'dotted' },
      { value: 'dashed' },
      { value: 'double' },
      { value: 'groove' },
      { value: 'ridge' },
      { value: 'inset' },
      { value: 'outset' },
    ],
    ...options.extendStyle
  }

  const borderWidth = {
    property: 'border-width',
    units: ['px', 'em', 'rem', 'vh', 'vw'],
    unit: 'px',
    type: 'slider', //Seems slider doesn't work well with composite types
    defaults: 1,
    min: 0,
    max: 20,
    ...options.extendWidth
  }

  const borderColor = {
    property: 'border-color',
    type: 'color',
    ...options.extendColor
  }

  const properties = [borderWidth, borderStyle, borderColor];

  const borders = [
    {
      property: 'border',
      type: 'composite',
      properties,
      ...options.extendBorder
    },
    {
      property: 'border-top',
      type: 'composite',
      properties,
      ...options.extendBorderTop
    },
    {
      property: 'border-right',
      type: 'composite',
      properties,
      ...options.extendBorderRight
    },
    {
      property: 'border-bottom',
      type: 'composite',
      properties,
      ...options.extendBorderBottom
    },
    {
      property: 'border-left',
      type: 'composite',
      properties,
      ...options.extendBorderLeft
    },
  ];

  editor.on('load', () => {
    const { originalBorder, sector, at } = options;
    sm.removeProperty(originalBorder.sector, originalBorder.name);
    typeProps = sm.addProperty(sector, borderType, at ? { at } : {});
    borders.forEach((border) => {
      borderProps.push(sm.addProperty(sector, border, at ? { at } : {}));
    });

    borderProps.forEach((borderProp) => {
      const { $el } = borderProp.view;
      if (borderProp.get('property') !== 'border') $el.hide();
      else typeProps.view.$el.insertBefore($el.find(wSelector).first());
    });
  });
};