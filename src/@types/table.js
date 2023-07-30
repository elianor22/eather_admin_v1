import PropTypes from 'prop-types'

export const typesTable = {
  columns: PropTypes.array.isRequired,
  align: PropTypes.string.isRequired,
  showHeader: PropTypes.bool,
  buttonOptions: PropTypes.shape({
    view: PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string,
      onClick: PropTypes.func,
      visible: PropTypes.bool,
    }),
    edit: PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string,
      onClick: PropTypes.func,
      visible: PropTypes.bool,
    }),
    delete: PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string,
      onClick: PropTypes.func,
      visible: PropTypes.bool,
    }),
  }),
  showButtonOption: PropTypes.bool,
  buttonOptionTitle: PropTypes.string,
}

export const typeTableDataGrid = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
      editable: PropTypes.bool,
      hideable: PropTypes.bool,
      discription: PropTypes.string,
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.any).isRequired,
  pageSize: PropTypes.number,
  onChangePage: PropTypes.func,
  perPageOptions: PropTypes.arrayOf(PropTypes.number),
}
