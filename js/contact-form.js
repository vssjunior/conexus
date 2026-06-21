/**
 * Conexus & Cia — Formulário de contato (UI, validação e envio)
 */
(function () {
  'use strict';

  const form = document.getElementById('fContato');
  if (!form) return;

  const submitBtn = document.getElementById('btn-submit');
  const submitLabel = submitBtn ? submitBtn.querySelector('.btn-submit__label') : null;
  const submitSpinner = submitBtn ? submitBtn.querySelector('.btn-submit__spinner') : null;
  const errorEl = document.getElementById('form-errors');
  const successEl = document.getElementById('form-success');
  const formCard = form.closest('.form-card');
  const toastContainer = document.getElementById('toast-container');
  const agendarCheckbox = form.querySelector('#cPed');
  const agendarFields = document.getElementById('agendamento-fields');
  const telefoneInput = document.getElementById('cTel');
  const cepInput = document.getElementById('cCep');

  const fieldLabels = {
    nome: 'Nome',
    email: 'E-mail',
    telefone: 'Telefone',
    cep: 'CEP',
    logradouro: 'Logradouro',
    numero: 'Número',
    bairro: 'Bairro',
    uf: 'Estado',
    cidade: 'Cidade',
    mensagem: 'Mensagem',
    dataDesejada: 'Dia do agendamento',
    horaDesejada: 'Horário do agendamento',
  };

  const urgenciaLabels = {
    0: 'Baixa',
    5: 'Média',
    10: 'Alta',
  };

  function maskPhone(value) {
    const digits = String(value || '').replace(/\D/g, '').slice(0, 11);

    if (digits.length <= 2) return digits ? '(' + digits : '';
    if (digits.length <= 6) return '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
    if (digits.length <= 10) {
      return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 6) + '-' + digits.slice(6);
    }

    return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 7) + '-' + digits.slice(7);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10 || digits.length === 11;
  }

  function getUrgenciaLabel(value) {
    return urgenciaLabels[value] || 'Média';
  }

  function buildPayload() {
    const agendar = agendarCheckbox ? agendarCheckbox.checked : false;

    return {
      nome: form.cNome.value.trim(),
      email: form.cMail.value.trim(),
      telefone: telefoneInput ? telefoneInput.value.trim() : '',
      cep: cepInput ? cepInput.value.trim() : '',
      logradouro: form.cRua.value.trim(),
      numero: form.cNum.value.trim(),
      complemento: form.cCompl.value.trim(),
      bairro: form.cBairro.value.trim(),
      cidade: form.cCidade.value.trim(),
      uf: form.cEst.value,
      urgencia: getUrgenciaLabel(form.cUrg.value),
      mensagem: form.cMsg.value.trim(),
      dataDesejada: agendar ? form.cDia.value : '',
      horaDesejada: agendar ? form.cHora.value.trim() : '',
      origem: 'Site Conexus',
    };
  }

  function validateForm() {
    const errors = [];
    const payload = buildPayload();
    const agendar = agendarCheckbox ? agendarCheckbox.checked : false;

    if (!payload.nome) errors.push(fieldLabels.nome);
    if (!payload.email) errors.push(fieldLabels.email);
    else if (!isValidEmail(payload.email)) errors.push('E-mail válido');
    if (!payload.telefone) errors.push(fieldLabels.telefone);
    else if (!isValidPhone(payload.telefone)) errors.push('Telefone válido');
    if (!payload.cep) errors.push(fieldLabels.cep);
    else if (!window.ConexusCepService.isValidCepFormat(payload.cep)) errors.push('CEP válido');
    if (!payload.logradouro) errors.push(fieldLabels.logradouro);
    if (!payload.numero) errors.push(fieldLabels.numero);
    if (!payload.bairro) errors.push(fieldLabels.bairro);
    if (!payload.uf) errors.push(fieldLabels.uf);
    if (!payload.cidade) errors.push(fieldLabels.cidade);
    if (!payload.mensagem) errors.push(fieldLabels.mensagem);

    if (agendar) {
      if (!payload.dataDesejada) errors.push(fieldLabels.dataDesejada);
      if (!payload.horaDesejada) errors.push(fieldLabels.horaDesejada);
    }

    return errors;
  }

  function showInlineErrors(errors) {
    if (!errorEl) return;

    if (!errors.length) {
      errorEl.hidden = true;
      errorEl.textContent = '';
      return;
    }

    errorEl.hidden = false;
    errorEl.innerHTML =
      '<strong>Preencha os campos obrigatórios:</strong> ' + errors.join(', ') + '.';
    errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showToast(message, type) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast toast--' + type;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
    toast.innerHTML =
      '<span class="toast__icon"><i class="bi bi-' +
      (type === 'success' ? 'check-circle-fill' : 'exclamation-triangle-fill') +
      '"></i></span><span class="toast__message">' +
      message +
      '</span>';

    toastContainer.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('is-visible');
    });

    window.setTimeout(function () {
      toast.classList.remove('is-visible');
      window.setTimeout(function () {
        toast.remove();
      }, 300);
    }, 5000);
  }

  function setSubmitting(isSubmitting) {
    if (!submitBtn) return;

    submitBtn.disabled = isSubmitting;
    submitBtn.setAttribute('aria-busy', String(isSubmitting));

    if (submitLabel) submitLabel.hidden = isSubmitting;
    if (submitSpinner) submitSpinner.hidden = !isSubmitting;
  }

  function showSuccessState() {
    form.reset();
    toggleAgendamentoFields();

    if (formCard) formCard.hidden = true;

    if (successEl) {
      successEl.hidden = false;
      successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    showToast('Mensagem enviada com sucesso.', 'success');
  }

  function toggleAgendamentoFields() {
    if (!agendarCheckbox || !agendarFields) return;

    const enabled = agendarCheckbox.checked;
    agendarFields.hidden = !enabled;

    agendarFields.querySelectorAll('input').forEach(function (input) {
      input.required = enabled;
    });
  }

  if (telefoneInput) {
    telefoneInput.addEventListener('input', function () {
      telefoneInput.value = maskPhone(telefoneInput.value);
    });
  }

  if (window.ConexusCepService) {
    window.ConexusCepService.bind({
      cepInput: cepInput,
      loadingEl: document.getElementById('cep-loading'),
      errorEl: document.getElementById('cep-error'),
      fields: {
        logradouro: document.getElementById('cRua'),
        bairro: document.getElementById('cBairro'),
        cidade: document.getElementById('cCidade'),
        uf: document.getElementById('cEst'),
        numero: document.getElementById('cNum'),
      },
    });
  }

  if (agendarCheckbox) {
    agendarCheckbox.addEventListener('change', toggleAgendamentoFields);
    toggleAgendamentoFields();
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const errors = validateForm();
    if (errors.length) {
      showInlineErrors(errors);
      return;
    }

    showInlineErrors([]);
    if (successEl) successEl.hidden = true;

    const payload = buildPayload();
    setSubmitting(true);

    try {
      await window.ConexusContactService.submitContact(payload);
      showSuccessState();
    } catch (error) {
      showToast(
        error.message ||
          'Não foi possível enviar sua solicitação neste momento. Tente novamente em alguns minutos.',
        'error'
      );
    } finally {
      setSubmitting(false);
    }
  });
})();
