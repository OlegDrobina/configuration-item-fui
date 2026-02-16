using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Factories;
using System.Collections.Generic;
using System.Linq;
using Terrasoft.Configuration.ExternalAccessPackage;

namespace Terrasoft.Configuration
{

    [DefaultBinding(typeof(IEntityQueryExecutor), Name = "UsrTempExternalAccessQueryExecutor")]
	public class UsrTempExternalAccessQueryExecutor : IEntityQueryExecutor
	{
		#region Fields: Private
		
		private readonly UserConnection _userConnection;

		#endregion
		
		#region Constructors: Public
		
		public UsrTempExternalAccessQueryExecutor(UserConnection userConnection)
		{
			_userConnection = userConnection;
		}
		
		#endregion

		#region Methods: Private

		private void LogGetExternalAccessListError(Exception e)
		{
			var logger = global::Common.Logging.LogManager.GetLogger("Common");
			logger.WarnFormat("There was an error when getting external access list: ", e);
		}

		private string GetReceivedCustomerId(EntitySchemaQuery esq)
		{
			string customerId = String.Empty;
			if (esq.Filters != null && esq.Filters.Any())
			{
				var filterObj = esq.Filters.First();
				var filterInstances = filterObj.GetFilterInstances();
				if (filterInstances != null && filterInstances.Any())
				{
					var filter = filterInstances.First();
					if (filter.RightExpressions != null && filter.RightExpressions.Count > 0)
					{
						customerId = filter.RightExpressions[0].ParameterValue?.ToString();
					}
				}
			}
			return customerId;
		}

		private string ProcessReceivedExpirationDateToString(string receivedDateTime)
		{
			string shortDateString = "";
			try 
			{
				DateTime dateTimeObject = DateTime.Parse(receivedDateTime);
				shortDateString = dateTimeObject.ToShortDateString();
			}
			catch (Exception e)
			{
				LogGetExternalAccessListError(e);
			}
			return shortDateString;
		}

		private EntityCollection ProcessReceivedTemporaryExternalAccesses(List<GetTempAccessListDto> tempAccessList, EntityCollection tempExternalAccessesCollection)
		{
			var usrTempExternalAccessManager = _userConnection.EntitySchemaManager.GetInstanceByName("UsrTempExternalAccess");
			foreach (var item in tempAccessList)
			{
				string expirationDate = "";
				if (!String.IsNullOrEmpty(item.ExpirationDate))
				{
					expirationDate = ProcessReceivedExpirationDateToString(item.ExpirationDate);
				}
				var usrTempExternalAccessEntity = usrTempExternalAccessManager.CreateEntity(_userConnection);
				usrTempExternalAccessEntity.SetColumnValue("UsrUrl", item.Url);
				usrTempExternalAccessEntity.SetColumnValue("UsrIsDataIsolationEnabled", item.IsDataIsolationEnabled);
				usrTempExternalAccessEntity.SetColumnValue("UsrIsSystemOpearationsRestricted", item.IsSystemOperationsRestricted);
				usrTempExternalAccessEntity.SetColumnValue("UsrDescription", item.Description);
				usrTempExternalAccessEntity.SetColumnValue("UsrExpirationDate", expirationDate);
				usrTempExternalAccessEntity.SetColumnValue("UsrAccessId", item.AccessId);
				tempExternalAccessesCollection.Add(usrTempExternalAccessEntity);
			}
			return tempExternalAccessesCollection;
		}

		#endregion

		#region Methods: Public

		public EntityCollection GetEntityCollection(EntitySchemaQuery esq)
		{
			string customerId = GetReceivedCustomerId(esq);
			TempAccessService tempAccessService = new TempAccessService();
			List<GetTempAccessListDto> tempExternalAccessList = new List<GetTempAccessListDto>();
			var usrTempExtermalAccessCollection = new EntityCollection(_userConnection, "UsrTempExternalAccess");
			try
			{
				tempExternalAccessList = tempAccessService.GetTempAccessList(new[] { customerId }, null);
				usrTempExtermalAccessCollection = ProcessReceivedTemporaryExternalAccesses(tempExternalAccessList, usrTempExtermalAccessCollection);
			}
			catch (Exception e)
			{
				LogGetExternalAccessListError(e);
			}
			return usrTempExtermalAccessCollection;
		}
		
		#endregion
	}
}