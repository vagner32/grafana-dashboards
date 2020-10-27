import { Form as FormFinal } from 'react-final-form';
import React, { FC, useCallback } from 'react';
import { TextInputField, validators } from '@percona/platform-core';
import { Button } from '@grafana/ui';
import { getStyles } from './Credentials.styles';
import { SECURITY_CREDENTIALS_DOC_LINK } from './Credentials.constants';
import { Messages } from './Credentials.messages';
import { CredentialsProps, CredentialsForm } from './Credentials.types';

const Credentials: FC<CredentialsProps> = ({ onSetCredentials }) => {
  const styles = getStyles();

  const onSubmit = useCallback((values: CredentialsForm) => {
    onSetCredentials({ ...values });
  }, []);

  return (
    <FormFinal
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.instanceForm}>
          <div className={styles.searchPanel}>
            <TextInputField
              name={Messages.form.fields.awsAccessKey.name}
              placeholder={Messages.form.fields.awsAccessKey.placeholder}
              validators={[validators.required]}
              fieldClassName={styles.credentialsField}
            />
            <TextInputField
              name={Messages.form.fields.awsSecretKey.name}
              placeholder={Messages.form.fields.awsSecretKey.placeholder}
              validators={[validators.required]}
              fieldClassName={styles.credentialsField}
            />
            <Button type="submit" data-qa={'credentials-search-button'} className={styles.credentialsSubmit}>{Messages.form.submitButton}</Button>
          </div>
          <div>
            <a href={SECURITY_CREDENTIALS_DOC_LINK}>{Messages.form.credentialsDocLink}</a>
          </div>
        </form>
      )}
    />
  );
};

export default Credentials;
