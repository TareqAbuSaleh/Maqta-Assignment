using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Service.User.Dto;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ViewModel;
using ViewModel.Context;
using System.Linq;
using Mapster;
using Service.Request.Dto;

namespace Service.Request
{
    public class RequestService : IRequestService
    {
        private DataContext _context;
        public RequestService(DataContext _context)
        {
            this._context = _context;
        }
        public async Task<AppResponse> AddRequest(AddRequest input)
        {
            AppResponse appResponse = new AppResponse();
            try
            {
                RequestOrder request = new RequestOrder();
                request = input.Adapt<RequestOrder>();
                _context.Add<RequestOrder>(request);
                _context.SaveChanges();
                return appResponse;

            }
            catch (Exception ex)
            {
                appResponse.ErrorMessage = ex.InnerException?.Message ?? ex.Message;
                appResponse.Error = ex;
                return appResponse;
            }
        }

        public async Task<AppResponse<List<GetAllRequests>>> GetAllRequest()
        {
            AppResponse<List<GetAllRequests>> appResponse = new AppResponse<List<GetAllRequests>>();
            appResponse.Data = new List<GetAllRequests>();
            appResponse.Data = _context.RequestOrders.ToList().Adapt<List<GetAllRequests>>();
            return appResponse;
        }

        public async Task<AppResponse<GetByIdRequestOutput>> GetByIdRequest(string input)
        {
            AppResponse<GetByIdRequestOutput> appResponse = new AppResponse<GetByIdRequestOutput>();
            appResponse.Data = new GetByIdRequestOutput();
            RequestOrder request = _context.RequestOrders.Where(a => a.Id == input).FirstOrDefault();
            if (request == null)
            {
                appResponse.ErrorMessage = "Recored Not Found";
                return appResponse;
            }
            appResponse.Data = request.Adapt<GetByIdRequestOutput>();
            return appResponse;
        }

        public async  Task<AppResponse> Update(GetByIdRequestOutput input)
        {
            AppResponse appResponse = new AppResponse();
            RequestOrder request = _context.RequestOrders.Where(a => a.Id == input.Id).FirstOrDefault();
            if (request == null)
            {
                appResponse.ErrorMessage = "Recored Not Found";
                return appResponse;
            }
            request.Request = input.Request;
            request.Quantity = input.Quantity;
            request.Notes = input.Notes;
            _context.SaveChanges();
            return appResponse;
        }
        public async Task<AppResponse> Delete(string input)
        {
            AppResponse appResponse = new AppResponse();
            RequestOrder request = _context.RequestOrders.Where(a => a.Id == input).FirstOrDefault();
            if (request == null)
            {
                appResponse.ErrorMessage = "Recored Not Found";
                return appResponse;
            }
            _context.RequestOrders.Remove(request);
            _context.SaveChanges();
            return appResponse;
        }
    }
}

