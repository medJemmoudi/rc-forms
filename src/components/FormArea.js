import React, { Component } from 'react'
import PropTypes from 'prop-types';

/**
 * FormArea configuraion object:
 * {
 *  id,
 *  className,
 *  style,
 *  method: ["get", "post"], default = GET,
 *  onSubmit: () => {},
 *  action,
 *  fields= [
 *    {id, name, className, style, onChange, value, placeholder, type},
 *    {id, name, className, style, onChange, value, placeholder, type},
 *    {id, name, className, style, onChange, value, placeholder, type},
 *  ],
 * }
 */

export class FormArea extends Component {
  renderFields = (fields) => {
    return fields.map(field => {
      return (
        <input
          id={field.id}
          name={field.name}
          style={field.style}
          className={field.className}
          onChange={field.onChange}
          value={field.value}
          placeholder={field.placeholder}
          type={field.type}
        />
      );
    });
  }

  render() {
    const { config } = this.props;
    return (
      <form 
        id={config.id} 
        className={config.className}
        style={config.style}
        action={config.action}
        onSubmit={config.onSubmit}
      >
        {this.renderFields(config.fields)}
      </form>
    )
  }
}

FormArea.propTypes = {
  config: PropTypes.object.isRequired,
}

export default FormArea;
