/**
 * Conexus & Cia — Serviço ViaCEP
 */
(function (global) {
  'use strict';

  const VIA_CEP_URL = 'https://viacep.com.br/ws/';

  function onlyDigits(value) {
    return String(value || '').replace(/\D/g, '');
  }

  function maskCep(value) {
    const digits = onlyDigits(value).slice(0, 8);
    if (digits.length <= 5) return digits;
    return digits.slice(0, 5) + '-' + digits.slice(5);
  }

  function isValidCepFormat(value) {
    return onlyDigits(value).length === 8;
  }

  async function lookupCep(cepDigits) {
    const digits = onlyDigits(cepDigits);

    if (digits.length !== 8) {
      throw new Error('CEP inválido');
    }

    const response = await fetch(VIA_CEP_URL + digits + '/json/');

    if (!response.ok) {
      throw new Error('CEP não localizado. Verifique o número informado.');
    }

    const data = await response.json();

    if (data.erro) {
      throw new Error('CEP não localizado. Verifique o número informado.');
    }

    return {
      logradouro: data.logradouro || '',
      bairro: data.bairro || '',
      cidade: data.localidade || '',
      uf: data.uf || '',
    };
  }

  function bind(options) {
    const cepInput = options.cepInput;
    if (!cepInput) return;

    const fields = options.fields || {};
    const loadingEl = options.loadingEl;
    const errorEl = options.errorEl;
    const addressFields = [
      fields.logradouro,
      fields.bairro,
      fields.cidade,
      fields.uf,
    ].filter(Boolean);

    let lastFetchedCep = '';
    let isFetching = false;

    function setLoading(active) {
      isFetching = active;
      if (loadingEl) loadingEl.hidden = !active;
      addressFields.forEach(function (field) {
        field.disabled = active;
      });
    }

    function showError(message) {
      if (!errorEl) return;
      errorEl.textContent = message || '';
      errorEl.hidden = !message;
    }

    function fillAddress(data) {
      if (fields.logradouro) fields.logradouro.value = data.logradouro;
      if (fields.bairro) fields.bairro.value = data.bairro;
      if (fields.cidade) fields.cidade.value = data.cidade;
      if (fields.uf) fields.uf.value = data.uf;
    }

    async function handleLookup() {
      const digits = onlyDigits(cepInput.value);

      if (digits.length !== 8) {
        showError('');
        return;
      }

      if (isFetching || digits === lastFetchedCep) return;

      showError('');
      setLoading(true);

      try {
        const data = await lookupCep(digits);
        fillAddress(data);
        lastFetchedCep = digits;
        if (fields.numero) fields.numero.focus();
      } catch (error) {
        showError(error.message || 'CEP não localizado. Verifique o número informado.');
      } finally {
        setLoading(false);
      }
    }

    cepInput.addEventListener('input', function () {
      cepInput.value = maskCep(cepInput.value);

      if (onlyDigits(cepInput.value).length !== 8) {
        lastFetchedCep = '';
        showError('');
        return;
      }

      handleLookup();
    });

    cepInput.addEventListener('blur', function () {
      cepInput.value = maskCep(cepInput.value);
      handleLookup();
    });

    cepInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleLookup();
      }
    });
  }

  global.ConexusCepService = {
    onlyDigits: onlyDigits,
    maskCep: maskCep,
    isValidCepFormat: isValidCepFormat,
    lookupCep: lookupCep,
    bind: bind,
  };
})(window);
