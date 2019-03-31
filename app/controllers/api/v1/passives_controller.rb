module Api::V1
  class PassivesController < ApplicationController
    before_action :set_passife, only: [:show, :edit, :update, :destroy]
    skip_before_action :verify_authenticity_token
    # GET /passives
    # GET /passives.json
    def index
      @passives = Passive.all
    end
  
    # GET /passives/1
    # GET /passives/1.json
    def show
    end
  
    # GET /passives/new
    def new
      @passife = Passive.new
    end
  
    # GET /passives/1/edit
    def edit
    end
  
    # POST /passives
    # POST /passives.json
    def create
      @passife = Passive.new(passife_params)
  
      respond_to do |format|
        if @passife.save
          format.html { redirect_to @passife, notice: 'Passive was successfully created.' }
          format.json { render :show, status: :created, location: @api_v1_passife }
        else
          format.html { render :new }
          format.json { render json: @passife.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # PATCH/PUT /passives/1
    # PATCH/PUT /passives/1.json
    def update
      respond_to do |format|
        if @passife.update(passife_params)
          format.html { redirect_to @passife, notice: 'Passive was successfully updated.' }
          format.json { render :show, status: :ok, location: @api_v1_passife }
        else
          format.html { render :edit }
          format.json { render json: @passife.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # DELETE /passives/1
    # DELETE /passives/1.json
    def destroy
      @passife.destroy
      respond_to do |format|
        format.html { redirect_to passives_url, notice: 'Passive was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_passife
        @passife = Passive.find(params[:id])
      end
  
      # Never trust parameters from the scary internet, only allow the white list through.
      def passife_params
        params.require(:passife).permit(:name, :description)
      end
  end
end
