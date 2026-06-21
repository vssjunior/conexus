/**
 * Conexus & Cia — Integração Google Apps Script
 */
(function (global) {
  'use strict';

  const APP_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbx_iU3URmtRJhxQenI1zN7tID31eL5lyPEplBK1D86qSsORv_9lQ5bbj-R_BNziAkc/exec';

  async function submitContact(payload) {
    const response = await fetch(APP_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

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
