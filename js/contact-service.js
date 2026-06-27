/**
 * Conexus & Cia — Integração Google Apps Script
 *
 * Envia via application/x-www-form-urlencoded + mode no-cors para contornar
 * a ausência de Access-Control-Allow-Origin nas Web Apps do GAS.
 * No Apps Script, leia os campos em e.parameter dentro do doPost.
 */
(function (global) {
  'use strict';

  const APP_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbx_iU3URmtRJhxQenI1zN7tID31eL5lyPEplBK1D86qSsORv_9lQ5bbj-R_BNziAkc/exec';

  function isFileProtocol() {
    return window.location.protocol === 'file:';
  }

  function buildFormBody(payload) {
    const body = new URLSearchParams();

    Object.entries(payload).forEach(function (entry) {
      body.append(entry[0], String(entry[1] ?? ''));
    });

    return body;
  }

  async function submitContact(payload) {
    if (isFileProtocol()) {
      throw new Error(
        'Para enviar o formulário, acesse o site por http ou https (não abra o arquivo HTML diretamente no navegador).'
      );
    }

    const body = buildFormBody(payload);

    try {
      await fetch(APP_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: body,
      });

      return { success: true };
    } catch (error) {
      throw new Error(
        'Não foi possível enviar sua solicitação neste momento. Verifique sua conexão e tente novamente em alguns minutos.'
      );
    }
  }

  global.ConexusContactService = {
    APP_SCRIPT_URL: APP_SCRIPT_URL,
    submitContact: submitContact,
  };
})(window);
