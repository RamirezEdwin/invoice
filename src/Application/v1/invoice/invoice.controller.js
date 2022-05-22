import InvoiceModel from './invoice.model';

export const getAllInvoices = async (req, res) => {
  const { offset, limit } = req.params;
  try {
    const data = await InvoiceModel.find().skip(offset).limit(limit);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
};

export const createInvoice = async (req, res) => {
  const {
    name,
    total,
    date,
    DocumentType,
    status,
  } = req.body;
  if (
    !name || !total || !date
    || !DocumentType
  ) {
    return res.status(400).json({
      message:
        `${'Faltan datos,'}`,
      code: 400,
    });
  }
  try {
    const data = await InvoiceModel.create({
      name,
      total,
      date,
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

export const updateInvoice = async (req, res) => {
  const { body, params } = req;
  const { idInvoice } = params;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }
  try {
    const data = await InvoiceModel.findOneAndUpdate(
      { _id: idInvoice },
      {
        status: 'paid out'
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

export const GetInvoiceSlope = async (req, res) => {
  const { document } = req.params;
  if (!document) {
    console.log(document);
    res.status(300)
      .json({
        message: 'Debe de agreagar el numero de documento',
        code: 400
      });
  }
  const data = await InvoiceModel.find({ DocumentType: `${document}`, status: 'Slope', });
  res.status(200).json(data);
};
