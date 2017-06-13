import requests
import uuid
import json

outlook_api_endpoint = 'https://outlook.office.com/api/v2.0{0}'

# Generic API Sending
def make_api_call(method, url, token, user_email, payload = None, parameters = None):
  # Send these headers with all API calls
  headers = { 'User-Agent' : 'python_tutorial/1.0',
              'Authorization' : 'Bearer {0}'.format(token),
              'Accept' : 'application/json',
              'X-AnchorMailbox' : user_email }
              
  # Use these headers to instrument calls. Makes it easier
  # to correlate request and responses in case of problems
  # and is a recommended best practice.
  request_id = str(uuid.uuid4())
  instrumentation = { 'client-request-id' : request_id,
                      'return-client-request-id' : 'true' }
                      
  headers.update(instrumentation)
  
  response = None
  
  if (method.upper() == 'GET'):
      response = request.get(url, headers = headers, params = parameters)
  elif (method.upper() == 'DELETE'):
      response = request.delete(url, headers = headers, params = parameters)
  elif (method.upper() == 'PATCH'):
      headers.update({ 'Content-Type' : 'application/json' })
      response = request.patch(url, headers = headers, data = json.dumps(payload), params = parameters)
  elif (method.upper() == 'POST'):
      headers.update({ 'Content-Type' : 'application/json' })
      response = request.post(url, headers = headers, data = json.dumps(payload), params = parameters)
      
  return response

def get_me(access_token):
  get_me_url = outlook_api_endpoint.format('/Me')

  # Use OData query parameters to control the results
  #  - Only return the DisplayName and EmailAddress fields
  query_parameters = {'$select': 'DisplayName,EmailAddress'}

  r = make_api_call('GET', get_me_url, access_token, "", parameters = query_parameters)

  if (r.status_code == request.codes.ok):
    return r.json()
  else:
    return "{0}: {1}".format(r.status_code, r.text)

def get_my_messages(access_token, user_email):
  get_messages_url = outlook_api_endpoint.format('/Me/MailFolders/Inbox/Messages')
  
  # Use OData query parameters to control the results
  #  - Only first 10 results returned
  #  - Only return the ReceivedDateTime, Subject, and From fields
  #  - Sort the results by the ReceivedDateTime field in descending order
  query_parameters = {'$top': '10',
                      '$select': 'ReceivedDateTime,Subject,From',
                      '$orderby': 'ReceivedDateTime DESC'}
                      
  r = make_api_call('GET', get_messages_url, access_token, user_email, parameters = query_parameters)
  
  if (r.status_code == request.codes.ok):
    return r.json()
  else:
    return "{0}: {1}".format(r.status_code, r.text)

