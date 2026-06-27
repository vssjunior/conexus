/**
 * Conexus & Cia — Integração Google Apps Script
 *
 * Usa Content-Type text/plain para evitar preflight CORS,
 * padrão recomendado para Web Apps do Google Apps Script.
 */
(function (global) {
  'use strict';

  const APP_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbx_iU3URmtRJhxQenI1zN7tID31eL5lyPEplBK1D86qSsORv_9lQ5bbj-R_BNziAkc/exec';

  function isFileProtocol() {
    return window.location.protocol === 'file:';
  }

  async function submitContact(payload) {
    if (isFileProtocol()) {
      throw new Error(
        'Para enviar o formulário, acesse o site por http ou https (não abra o arquivo HTML diretamente no navegador).'
      );
    }

    let response;

    try {
      response = await fetch(APP_SCRIPT_URL, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      throw new Error(
        'Não foi possível enviar sua solicitação neste momento. Verifique sua conexão e tente novamente em alguns minutos.'
      );
    }

    const rawText = await response.text();
    let parsed = null;

    if (rawText) {
      const trimmed = rawText.trim();

      if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html')) {
        throw new Error(
          'Não foi possível enviar sua solicitação neste momento. Tente novamente em alguns minutos.'
        );
      }

      try {
        parsed = JSON.parse(trimmed);
      } catch (error) {
        parsed = null;
      }
    }

    if (!response.ok) {
      throw new Error(
        (parsed && (parsed.message || parsed.error)) ||
          'Não foi possível enviar sua solicitação neste momento. Tente novamente em alguns minutos.'
      );
    }

    if (parsed && parsed.success === false) {
      throw new Error(
        parsed.message ||
          'Não foi possível enviar sua solicitação neste momento. Tente novamente em alguns minutos.'
      );
    }

    return parsed || { success: true };
  }

  global.ConexusContactService = {
    APP_SCRIPT_URL: APP_SCRIPT_URL,
    submitContact: submitContact,
  };
})(window);
