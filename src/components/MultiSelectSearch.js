// MultiSelectSearch.js
import React from 'react';
import Select from 'react-select';
import { useColorMode } from '@chakra-ui/react';

const MultiSelectSearch = ({ options, selectedOptions, handleSelectChange }) => {
  const { colorMode } = useColorMode();

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: colorMode === 'dark' ? '#2D3748' : '#FFFFFF',
      color: colorMode === 'dark' ? '#E2E8F0' : '#1A202C',
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: colorMode === 'dark' ? '#2D3748' : '#FFFFFF',
      color: colorMode === 'dark' ? '#E2E8F0' : '#1A202C',
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused
        ? colorMode === 'dark'
          ? '#4A5568'
          : '#E2E8F0'
        : colorMode === 'dark'
        ? '#2D3748'
        : '#FFFFFF',
      color: colorMode === 'dark' ? '#E2E8F0' : '#1A202C',
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: colorMode === 'dark' ? '#4A5568' : '#E2E8F0',
      color: colorMode === 'dark' ? '#E2E8F0' : '#1A202C',
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: colorMode === 'dark' ? '#E2E8F0' : '#1A202C',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: colorMode === 'dark' ? '#E2E8F0' : '#1A202C',
      ':hover': {
        backgroundColor: colorMode === 'dark' ? '#E53E3E' : '#C53030',
        color: 'white',
      },
    }),
  };

  const handleChange = (selectedOptions) => {
    handleSelectChange(selectedOptions.map(option => option.value));
  };

  return (
    <Select
      isMulti
      options={options}
      value={options.filter(option => selectedOptions.includes(option.value))}
      onChange={handleChange}
      styles={customStyles}
    />
  );
};

export default MultiSelectSearch;

