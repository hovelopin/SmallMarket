import * as smsRepository from '../repository/smsRepository.js';
import { getSocketIO } from '../connect/socket.js';

export async function getSmSs(request, response) {
  const username = request.query.username;
  const data = await (username
    ? smsRepository.getAllByUsername(username)
    : smsRepository.getAll());
  response.status(200).json(data);
}

export async function getSms(request, response) {
  const id = request.params.id;
  const sms = await smsRepository.getById(id);
  
  if(sms) {
    response.status(200).json(sms);
  } else {
    response.status(404).json({ message: `SMS id(${id}) not found...` });
  }
}

export async function createSms(request, response) {
  const { text } = request.body;
  const sms = await smsRepository.create(text, request.userId);
  response.status(201).json(sms);
  getSocketIO().emit('sms', sms);
}

export async function updateSms(request, response) {
  const id = request.params.id;
  const text = request.body.text;
  const sms = await smsRepository.getById(id);
  
  if(!sms) {
    return response.status(404).json({ message: `Sms not found : ${id}` });
  }

  if(sms.userId !== request.userId) {
    return response.sendStatus(403);
  }

  const updated = await smsRepository.update(id, text);
  response.status(200).json(updated);
}

export async function deleteSms(request, response) {
  const id = request.params.id;
  const sms = await smsRepository.getById(id);

  if(!sms) {
    return response.status(404).json({ message: `Sms not found : ${id}` });
  }

  if(sms.userId === request.userId) {
    return response.sendStatus(403);
  }

  await smsRepository.remove(id);
  response.status(204);
}