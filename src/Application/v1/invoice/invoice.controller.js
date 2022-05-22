import invoiceModule from './invoice.model';

export const getAllinvoice = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'payable' } = req.query;
  try {
    const data = await invoiceModule.find({ status, }).skip(offset).limit(limit);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};

export const createinvoice = async (req, res) => {
  const {
    name,
    mount,
    date,
    idInvoice,
    DocumentType,
    status,
  } = req.body;
  if (
    !name || !mount || !date
    || !idInvoice || !DocumentType
  ) {
    return res.status(400).json({
      message:
        `${'Faltan datos,'}`,
      code: 400,
    });
  }

  try {
    const data = await invoiceModule.create({
      name,
      mount,
      date,
      idInvoice,
      DocumentType,
      status,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};


export const Updateinvoice = async (req, res) => {
  const { body, params } = req;
  const { idinvoice } = params;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }
  try {
    const data = await Updateinvoice.findOneAndUpdate(
      { _id: idinvoice },
      {
        name: body.name,
        mount: body.mount,
        date: body.date,
        idInvoice: body.idInvoice,
        DocumentType: body.DocumentType,
        status: body.status
      }
    );
    return res.status(200).json(Object.assign(data, body));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo actualizar el registro',
    });
  }
};



