import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
  placeholder: string;
  error?: FieldError | undefined | any;
}

type typeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends typeInputPropsField {}
